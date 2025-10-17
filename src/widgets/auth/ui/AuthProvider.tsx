import { validateEmail, validatePassword } from '@shared/lib/validate';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { AuthContext } from '../model/ctx';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [mockDb, setMockDb] = useState<{ email: string; password: string }[]>([
    {
      email: 'demo@example.com',
      password: '123456',
    },
    {
      email: 'test@example.com',
      password: '123456',
    },
  ]);

  useEffect(() => {
    const userString = localStorage.getItem('user');

    try {
      const parsedUser = JSON.parse(userString as string);
      setUser(parsedUser);
    } catch {
      setUser(null);
    }
  }, []);

  const login = useCallback(
    ({ email, password }: { email: string; password: string }) => {
      const user = mockDb.find((user) => user.email === email && user.password === password);

      if (!user) {
        throw new Error('Invalid credentials');
      }

      if (!validateEmail(email)) {
        throw new Error('Invalid email');
      }

      localStorage.setItem('user', JSON.stringify(user));

      setUser({ email });
    },
    [mockDb],
  );

  const signup = useCallback(
    ({ email, password }: { email: string; password: string }) => {
      if (!validateEmail(email)) {
        throw new Error('Invalid email');
      }

      if (!validatePassword(password)) {
        throw new Error('Invalid password');
      }

      if (mockDb.find((user) => user.email === email)) {
        throw new Error('Email already exists');
      }

      const finalNewUser = { email, password };

      setMockDb((prev) => [...prev, finalNewUser]);
    },
    [mockDb],
  );

  const logout = useCallback(() => {
    localStorage.removeItem('user');
    setUser(null);
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      signup,
      login,
      logout,
    }),
    [user, signup, login, logout],
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
