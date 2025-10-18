/** biome-ignore-all lint/correctness/useUniqueElementIds: Modal components intentionally reuse IDs */

import { useAuth } from '@widgets/auth/model/ctx';

import LoginIcon from '@shared/icons/LoginIcon';
import { validateEmail, validatePassword } from '@shared/lib/validate';
import { Input } from '@shared/ui/input';
import { Label } from '@shared/ui/Label';
import { Modal, ModalContent, ModalOverlay, type ModalRef } from '@shared/ui/modal';
import { Slot } from '@shared/ui/slot';

import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';

export const SignupModal = forwardRef<ModalRef, { onLogin: () => void }>(({ onLogin }, ref) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const modalRef = useRef<ModalRef>(null);

  useImperativeHandle(ref, () => modalRef.current as ModalRef);

  const { signup } = useAuth();

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const handleConfirmPasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  }, []);

  const handleLogin = useCallback(() => {
    onLogin();
  }, [onLogin]);

  const handleSignup = useCallback(() => {
    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }

    if (!validateEmail(email)) {
      throw new Error('Invalid email');
    }

    if (!validatePassword(password)) {
      throw new Error('Invalid password');
    }

    try {
      signup({ email, password });
      modalRef.current?.close();
    } catch (error) {
      console.error(error);
    }
  }, [password, confirmPassword, email, signup]);

  return (
    <Modal ref={modalRef}>
      <ModalOverlay />
      <ModalContent>
        {/* Header */}
        <div className="text-center">
          <LoginIcon className="w-7 h-7 mb-5 mx-auto text-neutral-800" />
          <p className="text-base font-semibold mb-1 text-neutral-800">Create an account or log in to continue</p>
          <p className="text-xs text-neutral-600">Create an account to access all the features on the app</p>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <div>
            <Label htmlFor="email">Email or username</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email or username"
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

          <div>
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Re-enter your password"
              className="w-full mt-1"
              onChange={handleConfirmPasswordChange}
            />
          </div>
        </div>

        <button
          type="button"
          className="w-full bg-violet-800 text-white py-2.5 rounded-lg font-medium 
          hover:bg-violet-900 transition-colors mt-4 text-xs cursor-pointer"
          onClick={handleSignup}
        >
          Create Account
        </button>

        <Slot name="footer">
          <div className="py-2">
            <p className="text-xs text-neutral-600 text-center">
              Already have an account?{' '}
              <span role="button" tabIndex={-1} className="text-violet-800 cursor-pointer" onClick={handleLogin}>
                Log in
              </span>
            </p>
          </div>
        </Slot>
      </ModalContent>
    </Modal>
  );
});
