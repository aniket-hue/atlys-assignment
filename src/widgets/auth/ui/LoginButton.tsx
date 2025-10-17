import { LoginModal } from '@features/log-in';
import { SignupModal } from '@features/sign-up';

import type { ModalRef } from '@shared/ui/modal';

import { useRef } from 'react';
import { useAuth } from '../model/ctx';

export function LoginButton() {
  const { logout, user } = useAuth();
  const loginModalRef = useRef<ModalRef>(null);
  const signupModalRef = useRef<ModalRef>(null);

  function handleAction() {
    if (user) {
      logout();
    } else {
      loginModalRef.current?.open();
    }
  }

  function handleOpenLoginModal() {
    loginModalRef.current?.open();
  }

  return (
    <>
      <button type="button" onClick={handleAction} className="text-sm text-violet-800 cursor-pointer font-medium">
        {user ? 'Logout' : 'Login'}
      </button>

      <LoginModal
        ref={loginModalRef}
        onSignup={() => {
          loginModalRef.current?.close();
          signupModalRef.current?.open();
        }}
      />

      <SignupModal
        ref={signupModalRef}
        onLogin={() => {
          signupModalRef.current?.close();
          loginModalRef.current?.open();
        }}
      />

      {!user && <div role="button" tabIndex={-1} className="fixed inset-0 z-[50]" onClick={handleOpenLoginModal} />}
    </>
  );
}
