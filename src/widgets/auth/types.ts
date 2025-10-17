export interface AuthContextType {
  user:
    | {
        username: string;
      }
    | {
        email: string;
      }
    | null;
  logout: () => void;
  login: ({ email, password, username }: { email: string; password: string; username: string }) => void;
  signup: ({ email, password }: { email: string; password: string }) => void;
}
