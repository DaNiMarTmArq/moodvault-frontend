import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/AuthService';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  isLoading: boolean = false;
  formError = '';
  onLogin(form: NgForm) {
    this.isLoading = true;
    const { username, password } = form.value;

    this.authService.login({ username, password }).subscribe({
      next: (state) => {
        this.isLoading = false;
        if (state.valid) {
          this.router.navigate(['moods', 'dashboard']);
        } else {
          form.reset();
          this.formError =
            state.message === 'Incorrect username or password'
              ? 'Usuario o contraseña incorrectos'
              : 'Error inesperado, inténtalo de nuevo';
        }
      },
      error: () => {
        this.isLoading = false;
        this.formError = 'Error inesperado, inténtalo de nuevo';
      },
    });
  }
}
