import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/User';
import { AuthResponse } from '../models/AuthResponse';
import { IAuthService } from './IAuthService';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {
  private readonly baseUrl =
    'https://moodvault-server.onrender.com/api/v1/auth';
  private http = inject(HttpClient);
  private router = inject(Router);

  login(user: User): void {
    this.http.post<AuthResponse>(`${this.baseUrl}/login`, user).subscribe({
      next: (response) => {
        if (response.token) {
          localStorage.setItem('jwtToken', response.token);
          this.router.navigate(['/dashboard']);
        } else {
          console.error('Login failed:', response.message);
          alert(response.message);
        }
      },
      error: (error) => {
        let errorMessage = error.error.error;
        console.error('An error occurred during login:', error);
        alert(
          'An error occurred during login. Please try again. ' + errorMessage
        );
      },
    });
  }

  register(user: User): void {
    this.http.post<AuthResponse>(`${this.baseUrl}/register`, user).subscribe({
      next: (response) => {
        if (response.token) {
          // Save the token to localStorage
          localStorage.setItem('jwtToken', response.token);
          // Navigate to the homepage
          this.router.navigate(['/']);
        } else {
          // Handle the error message
          console.error('Registration failed:', response.message);
          alert(response.message);
        }
      },
      error: (error) => {
        // Handle HTTP or network errors
        console.error('An error occurred during registration:', error);
        alert('An error occurred during registration. Please try again.');
      },
    });
  }
}
