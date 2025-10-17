export interface AuthContextType {
  user: {
    username: string;
    email: string;
  } | null;
  logout: () => void;
}
