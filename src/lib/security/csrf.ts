/**
 * CSRF defense-in-depth: same-origin request validation.
 *
 * Iter 3 SEC-R3-001. Closes a residual CSRF window on irreversible endpoints
 * (notably DELETE /api/account, GDPR Art.17 right-to-erasure) by enforcing
 * Origin / Sec-Fetch-Site checks on top of the existing SameSite cookie posture.
 *
 * Order of precedence:
 *   1. `Sec-Fetch-Site: same-origin` (modern browsers, Chrome/FF/Safari ≥ 2020)
 *      — fast path, trust without parsing.
 *   2. `Origin` header host comparison to NEXT_PUBLIC_APP_URL.
 *   3. `Referer` header host comparison (legacy fallback).
 *   4. Fail-closed default: missing all three → reject.
 *
 * Reference: OWASP CSRF Prevention Cheat Sheet §6.
 */

import type { NextRequest } from 'next/server';

function getExpectedHost(): string | null {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (!appUrl) return null;
  try {
    return new URL(appUrl).host;
  } catch {
    return null;
  }
}

function matchesExpectedHost(headerValue: string, expectedHost: string): boolean {
  try {
    return new URL(headerValue).host === expectedHost;
  } catch {
    return false;
  }
}

/**
 * Returns true if the request is same-origin per defense-in-depth checks.
 * Fail-closed: any ambiguity returns false.
 */
export function isSameOriginRequest(request: NextRequest): boolean {
  // Step 1: Sec-Fetch-Site (most trustworthy, browser-asserted)
  const secFetchSite = request.headers.get('sec-fetch-site');
  if (secFetchSite === 'same-origin' || secFetchSite === 'none') {
    return true;
  }
  // If the browser explicitly says cross-site, reject regardless of other headers
  if (secFetchSite === 'cross-site' || secFetchSite === 'same-site') {
    // 'same-site' still allows subdomain attackers; treat as cross-origin for safety
    return secFetchSite === 'cross-site' ? false : false;
  }

  // Step 2: Origin header (POST/DELETE typically carry it)
  const expectedHost = getExpectedHost();
  if (!expectedHost) {
    // Without an allow-list anchor we cannot verify — fail closed
    return false;
  }

  const origin = request.headers.get('origin');
  if (origin) {
    return matchesExpectedHost(origin, expectedHost);
  }

  // Step 3: Referer fallback
  const referer = request.headers.get('referer');
  if (referer) {
    return matchesExpectedHost(referer, expectedHost);
  }

  // Step 4: missing all signals — fail closed
  return false;
}
