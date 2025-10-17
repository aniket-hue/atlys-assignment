import { LoginModal } from '@features/log-in';
import { SignupModal } from '@features/sign-up';

import type { ModalRef } from '@shared/ui/modal';

import { memo, useCallback, useRef } from 'react';
import { useAuth } from '../model/ctx';

export const LoginButton = memo(function LoginButton() {
  const { logout, user } = useAuth();
  const loginModalRef = useRef<ModalRef>(null);
  const signupModalRef = useRef<ModalRef>(null);

  const handleAction = useCallback(() => {
    if (user) {
      logout();
    } else {
      loginModalRef.current?.open();
    }
  }, [user, logout]);

  const handleOpenLoginModal = useCallback(() => {
    loginModalRef.current?.open();
  }, []);

  const handleSignup = useCallback(() => {
    loginModalRef.current?.close();
    signupModalRef.current?.open();
  }, []);

  const handleLogin = useCallback(() => {
    signupModalRef.current?.close();
    loginModalRef.current?.open();
  }, []);

  return (
    <>
      <button type="button" onClick={handleAction} className="text-sm text-violet-800 cursor-pointer font-medium">
        {user ? 'Logout' : 'Login'}
      </button>

      <LoginModal ref={loginModalRef} onSignup={handleSignup} />

      <SignupModal ref={signupModalRef} onLogin={handleLogin} />

      {/* {!user && <div role="button" tabIndex={-1} className="fixed inset-0 z-[50]" onClick={handleOpenLoginModal} />} */}
    </>
  );
});
