import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/AuthService';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [NgClass, RouterModule, FormsModule],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  isLoading: boolean = false;
  constructor() {}
  onLogin(form: NgForm) {
    this.isLoading = true;
    const { username, password } = form.value;
    this.authService.login({ username, password }).subscribe((state) => {
      this.isLoading = false;
      if (state.valid) {
        this.router.navigate(['moods', 'list']);
      } else {
        form.reset();
        window.alert('Login failed ' + state.message);
      }
    });
  }
}
