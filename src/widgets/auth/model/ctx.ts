import { createContext, useContext } from 'react';
import type { AuthContextType } from '../types';

export const AuthContext = createContext<AuthContextType>({
  user: null,
  logout: () => {
    throw new Error('Login function not implemented');
  },
});

export function useAuth() {
  return useContext(AuthContext);
}
