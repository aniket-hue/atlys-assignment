import { LoginModal } from '@features/log-in';

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

  return (
    <>
      <button type="button" onClick={handleAction} className="text-sm text-violet-800 cursor-pointer font-medium">
        {user ? 'Back to home' : 'Login'}
      </button>

      <LoginModal ref={loginModalRef} />
    </>
  );
}
