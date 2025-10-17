export interface AuthContextType {
  user: {
    email: string;
  } | null;
  logout: () => void;
  login: ({ email, password }: { email: string; password: string }) => void;
  signup: ({ email, password }: { email: string; password: string }) => void;
}
