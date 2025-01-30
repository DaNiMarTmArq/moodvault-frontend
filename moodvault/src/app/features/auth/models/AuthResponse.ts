import { User } from '../../../shared/models/User';

export interface AuthResponse {
  user: User;
  token: string;
  message: string;
  error?: string;
  status?: number;
}
