import { render, fireEvent } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useAuthStore } from '@/stores/auth-store';

/**
 * Regression coverage for the iter-9/10 in-flight submit guards.
 *
 * The mock auth store resolves login()/register() in one synchronous tick, so
 * isLoading flips true→false before React can disable the submit button — a rapid
 * double/triple submit used to fire the auth action (and a success toast +
 * router.push) N times. A useRef guard now makes concurrent submits no-op.
 *
 * We fire the form's submit event synchronously 3× (not awaited) to reproduce the
 * concurrent burst that userEvent.click — which awaits between clicks — cannot.
 */

const pushSpy = vi.fn();
const replaceSpy = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: pushSpy, replace: replaceSpy }),
}));

vi.mock('@/components/ui/Toast', () => ({
  showToast: { success: vi.fn(), error: vi.fn(), info: vi.fn() },
}));

import LoginPage from '@/app/(auth)/login/page';
import RegisterPage from '@/app/(auth)/register/page';

function seedAuth(overrides: Record<string, unknown> = {}) {
  // login/register replaced with spies that resolve and leave error null (success path).
  useAuthStore.setState({
    user: null,
    isLoading: false,
    error: null,
    _hasHydrated: true,
    login: vi.fn(async () => {}),
    register: vi.fn(async () => {}),
    clearError: vi.fn(),
    ...overrides,
  });
}

afterEach(() => {
  pushSpy.mockClear();
  replaceSpy.mockClear();
  vi.clearAllMocks();
});

describe('LoginPage: rapid double-submit guard', () => {
  beforeEach(() => seedAuth());

  it('calls login() exactly once and navigates once on a synchronous triple-submit', async () => {
    const { container } = render(<LoginPage />);
    const form = container.querySelector('form')!;
    const email = container.querySelector('input[type="email"]') as HTMLInputElement;
    const pw = container.querySelector('input[type="password"]') as HTMLInputElement;

    fireEvent.change(email, { target: { value: 'rapid@test.vet' } });
    fireEvent.change(pw, { target: { value: 'ValidPass123' } });

    // Concurrent burst: 3 synchronous submits before the first login() resolves.
    fireEvent.submit(form);
    fireEvent.submit(form);
    fireEvent.submit(form);

    // Let the awaited login() microtask settle.
    await Promise.resolve();
    await Promise.resolve();

    expect(useAuthStore.getState().login).toHaveBeenCalledTimes(1);
    expect(pushSpy).toHaveBeenCalledTimes(1);
    expect(pushSpy).toHaveBeenCalledWith('/home');
  });

  it('a failed validation does not lock out a later valid submit', async () => {
    const { container } = render(<LoginPage />);
    const form = container.querySelector('form')!;
    const email = container.querySelector('input[type="email"]') as HTMLInputElement;
    const pw = container.querySelector('input[type="password"]') as HTMLInputElement;

    // First submit: invalid email → validation returns before the guard is set.
    fireEvent.change(email, { target: { value: 'not-an-email' } });
    fireEvent.change(pw, { target: { value: 'ValidPass123' } });
    fireEvent.submit(form);
    await Promise.resolve();
    expect(useAuthStore.getState().login).toHaveBeenCalledTimes(0);

    // Fix the email and submit again — must NOT be locked out.
    fireEvent.change(email, { target: { value: 'ok@test.vet' } });
    fireEvent.submit(form);
    await Promise.resolve();
    await Promise.resolve();
    expect(useAuthStore.getState().login).toHaveBeenCalledTimes(1);
  });
});

describe('RegisterPage: rapid double-submit guard', () => {
  beforeEach(() => seedAuth());

  it('calls register() exactly once and navigates once on a synchronous triple-submit', async () => {
    const { container } = render(<RegisterPage />);
    const form = container.querySelector('form')!;
    const inputs = container.querySelectorAll('input');
    const email = inputs[0] as HTMLInputElement;
    const pw = inputs[1] as HTMLInputElement;
    const confirm = inputs[2] as HTMLInputElement;

    fireEvent.change(email, { target: { value: 'newuser@test.vet' } });
    fireEvent.change(pw, { target: { value: 'ValidPass123' } });
    fireEvent.change(confirm, { target: { value: 'ValidPass123' } });

    fireEvent.submit(form);
    fireEvent.submit(form);
    fireEvent.submit(form);

    await Promise.resolve();
    await Promise.resolve();

    expect(useAuthStore.getState().register).toHaveBeenCalledTimes(1);
    expect(pushSpy).toHaveBeenCalledTimes(1);
    expect(pushSpy).toHaveBeenCalledWith('/home');
  });
});
