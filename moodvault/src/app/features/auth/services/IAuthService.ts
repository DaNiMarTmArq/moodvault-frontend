import { Observable } from 'rxjs';
import { User } from '../../../shared/models/User';

export interface AuthState {
  valid: boolean;
  message: string;
  error?: string;
}

export interface IAuthService {
  login(user: User): Observable<AuthState>;
  register(user: User): Observable<AuthState>;
}
