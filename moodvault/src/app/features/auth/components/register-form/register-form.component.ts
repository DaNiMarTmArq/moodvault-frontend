import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/AuthService';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  authService = inject(AuthService);
  router = inject(Router);
  isLoading: boolean = false;
  formError: string = '';

  onRegister(form: NgForm) {
    this.isLoading = true;
    const { username, password } = form.value;

    this.authService.register({ username, password }).subscribe({
      next: (state) => {
        this.isLoading = false;
        if (state.valid) {
          this.router.navigate(['moods', 'dashboard']);
        } else {
          console.log(state);
          form.reset();
          this.formError =
            state.message === 'User already exists '
              ? 'El usuario ya existe.'
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
