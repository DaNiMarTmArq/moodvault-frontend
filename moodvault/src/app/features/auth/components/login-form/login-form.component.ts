import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/AuthService';
import { User } from '../../../../shared/models/User';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  private authService = inject(AuthService);
  constructor() {}
  onLogin(event: MouseEvent) {
    event.preventDefault();
    const user: User = {
      username: 'yepaDani997',
      password: 'willymosca997P',
    };
    this.authService.login(user).subscribe((state) => {
      state.valid
        ? console.log('Valid', state)
        : console.log('Not valid', state);
    });
  }
}
