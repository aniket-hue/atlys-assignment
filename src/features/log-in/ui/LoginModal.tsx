/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> */

import { Input } from '@shared/ui/input';
import { Label } from '@shared/ui/Label';
import { Modal, ModalContent, ModalOverlay } from '@shared/ui/modal';
import type { ModalRef } from '@shared/ui/modal/types';
import { Slot } from '@shared/ui/slot';

import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { useAuth } from '@widgets/auth/model/ctx';

export const LoginModal = forwardRef<ModalRef, { onSignup: () => void }>(({ onSignup }, ref) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, ...rest } = useAuth();

  const modalRef = useRef<ModalRef>(null);

  useImperativeHandle(ref, () => modalRef.current!);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    try {
      console.log(login);
      login({ email: username, password, username });
      modalRef.current?.close();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignup = () => {
    onSignup();
  };

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
            <Label htmlFor="email">Email or username</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email or username"
              className="w-full mt-1"
              onChange={handleUsernameChange}
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
