import { Observable } from 'rxjs';
import { User } from '../../../shared/models/User';

export interface IAuthService {
  login(user: User): Observable<boolean>;
  register(user: User): Observable<boolean>;
}
