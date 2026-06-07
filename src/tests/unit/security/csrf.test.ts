// @vitest-environment node
import { NextRequest } from 'next/server';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { isSameOriginRequest } from '@/lib/security/csrf';

function makeRequest(headers: Record<string, string> = {}): NextRequest {
  return new NextRequest(new URL('http://localhost:3001/api/account'), {
    method: 'DELETE',
    headers,
  });
}

describe('isSameOriginRequest (iter 3 SEC-R3-001)', () => {
  beforeEach(() => {
    vi.stubEnv('NEXT_PUBLIC_APP_URL', 'http://localhost:3001');
  });
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('accepts Sec-Fetch-Site: same-origin (fast path)', () => {
    expect(isSameOriginRequest(makeRequest({ 'sec-fetch-site': 'same-origin' }))).toBe(true);
  });

  it('accepts Sec-Fetch-Site: none (direct navigation, address-bar entry)', () => {
    expect(isSameOriginRequest(makeRequest({ 'sec-fetch-site': 'none' }))).toBe(true);
  });

  it('rejects Sec-Fetch-Site: cross-site', () => {
    expect(isSameOriginRequest(makeRequest({ 'sec-fetch-site': 'cross-site' }))).toBe(false);
  });

  it('rejects Sec-Fetch-Site: same-site (subdomain risk treated as cross-origin)', () => {
    expect(isSameOriginRequest(makeRequest({ 'sec-fetch-site': 'same-site' }))).toBe(false);
  });

  it('accepts matching Origin header when Sec-Fetch-Site absent', () => {
    expect(
      isSameOriginRequest(makeRequest({ origin: 'http://localhost:3001' }))
    ).toBe(true);
  });

  it('rejects mismatched Origin header (off-origin attacker)', () => {
    expect(
      isSameOriginRequest(makeRequest({ origin: 'http://attacker.example' }))
    ).toBe(false);
  });

  it('falls back to Referer when Origin missing', () => {
    expect(
      isSameOriginRequest(makeRequest({ referer: 'http://localhost:3001/profile' }))
    ).toBe(true);
  });

  it('rejects mismatched Referer', () => {
    expect(
      isSameOriginRequest(makeRequest({ referer: 'http://attacker.example/x' }))
    ).toBe(false);
  });

  it('fails closed when all headers missing', () => {
    expect(isSameOriginRequest(makeRequest({}))).toBe(false);
  });

  it('fails closed when NEXT_PUBLIC_APP_URL is unset', () => {
    vi.stubEnv('NEXT_PUBLIC_APP_URL', '');
    expect(
      isSameOriginRequest(makeRequest({ origin: 'http://localhost:3001' }))
    ).toBe(false);
  });

  it('rejects malformed Origin URL', () => {
    expect(
      isSameOriginRequest(makeRequest({ origin: 'not-a-url' }))
    ).toBe(false);
  });

  it('Sec-Fetch-Site takes precedence over Origin (browser-asserted truth wins)', () => {
    // Even with cross-origin Origin header, same-origin Sec-Fetch-Site should accept
    expect(
      isSameOriginRequest(
        makeRequest({
          'sec-fetch-site': 'same-origin',
          origin: 'http://attacker.example',
        })
      )
    ).toBe(true);
  });

  it('Sec-Fetch-Site: cross-site overrides matching Origin (browser saw cross-site nav)', () => {
    expect(
      isSameOriginRequest(
        makeRequest({
          'sec-fetch-site': 'cross-site',
          origin: 'http://localhost:3001',
        })
      )
    ).toBe(false);
  });
});
