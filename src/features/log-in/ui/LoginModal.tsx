/** biome-ignore-all lint/correctness/useUniqueElementIds: Modal components intentionally reuse IDs */

import { useAuth } from '@widgets/auth/model/ctx';

import { Input } from '@shared/ui/input';
import { Label } from '@shared/ui/Label';
import { Modal, ModalContent, ModalOverlay } from '@shared/ui/modal';
import type { ModalRef } from '@shared/ui/modal/types';
import { Slot } from '@shared/ui/slot';

import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';

export const LoginModal = forwardRef<ModalRef, { onSignup: () => void }>(({ onSignup }, ref) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const modalRef = useRef<ModalRef>(null);

  useImperativeHandle(ref, () => modalRef.current as ModalRef);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const handleLogin = useCallback(() => {
    try {
      login({ email, password });
      modalRef.current?.close();
    } catch (error) {
      console.error('Login failed:', error);
    }
  }, [login, email, password]);

  const handleSignup = useCallback(() => {
    onSignup();
  }, [onSignup]);

  return (
    <Modal ref={modalRef}>
      <ModalOverlay />
      <ModalContent>
        {/* Header */}
        <div className="text-center">
          <p className="text-base font-semibold mb-1 text-neutral-800">Sign in to continue</p>
          <p className="text-xs text-neutral-600">Sign in to access all the features on the app</p>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1"
              onChange={handleEmailChange}
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1"
              onChange={handlePasswordChange}
            />
          </div>
        </div>

        <button
          type="button"
          className="w-full bg-violet-800 text-white py-2.5 rounded-lg font-medium 
          hover:bg-violet-900 transition-colors mt-4 text-xs cursor-pointer"
          onClick={handleLogin}
        >
          Sign in
        </button>

        <Slot name="footer">
          <div className="py-2">
            <p className="text-xs text-neutral-600 text-center">
              Don't have an account?{' '}
              <span role="button" tabIndex={-1} className="text-violet-800 cursor-pointer" onClick={handleSignup}>
                Sign up
              </span>
            </p>
          </div>
        </Slot>
      </ModalContent>
    </Modal>
  );
});
