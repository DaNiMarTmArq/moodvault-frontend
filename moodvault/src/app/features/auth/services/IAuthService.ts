import { User } from '../../../shared/models/User';

export interface IAuthService {
  login(user: User): void;
  register(user: User): void;
}
