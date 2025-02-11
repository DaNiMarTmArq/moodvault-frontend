import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/AuthService';
import { User } from '../../../../shared/models/User';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  username: string = '';
  password: string = '';
  isLoginValid: boolean = true;
  isLoading: boolean = false;
  constructor() {}
  onLogin(event: MouseEvent) {
    event.preventDefault();
    this.isLoading = true;
    const user: User = {
      username: this.username,
      password: this.password,
    };
    this.authService.login(user).subscribe((state) => {
      this.isLoading = false;
      if (state.valid) {
        this.router.navigate(['moods', 'list']);
      } else {
        window.alert('Login failed ' + state.message);
      }
    });
  }
}
