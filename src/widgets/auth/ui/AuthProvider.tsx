import { useEffect, useState } from 'react';
import { AuthContext } from '../model/ctx';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);

  useEffect(() => {
    const userString = localStorage.getItem('user');

    try {
      const parsedUser = JSON.parse(userString as string);
      setUser(parsedUser);
    } catch {
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
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
