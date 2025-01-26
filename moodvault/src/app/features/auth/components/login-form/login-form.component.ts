import { Component } from '@angular/core';
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
  constructor(private authService: AuthService) {}
}
