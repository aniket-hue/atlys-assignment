import { useEffect, useState } from 'react';
import { AuthContext } from '../model/ctx';

const db = [
  {
    email: 'demo@example.com',
    password: '123456',
  },
  {
    email: 'test@example.com',
    password: '123456',
  },
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ email: string } | { username: string } | null>(null);

  useEffect(() => {
    const userString = localStorage.getItem('user');

    try {
      const parsedUser = JSON.parse(userString as string);
      setUser(parsedUser);
    } catch {
      setUser(null);
    }
  }, []);

  const login = ({ email, password, username }: { email: string; password: string; username: string }) => {
    const user = db.find(
      (user) =>
        (user.email === email && user.password === password) ||
        (user.username === username && user.password === password),
    );

    if (!user) {
      throw new Error('Invalid credentials');
    }

    localStorage.setItem('user', JSON.stringify(user));

    if (user.email) {
      setUser({ email });
    } else {
      setUser({ username });
    }
  };

  const signup = ({ email, password }: { email: string; password: string }) => {
    const user = db.find((user) => user.email === email && user.password === password);

    if (user) {
      throw new Error('User already exists');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout: () => {
          localStorage.removeItem('user');
          setUser(null);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
