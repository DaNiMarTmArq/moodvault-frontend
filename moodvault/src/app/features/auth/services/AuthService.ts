import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { User } from '../../../shared/models/User';
import { AuthResponse } from '../models/AuthResponse';
import { AuthState, IAuthService } from './IAuthService';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {
  private readonly baseUrl =
    'https://moodvault-server.onrender.com/api/v1/auth';
  private http = inject(HttpClient);

  login(user: User): Observable<AuthState> {
    return this.handleAuthResponse(
      this.http.post<AuthResponse>(`${this.baseUrl}/login`, user)
    );
  }

  register(user: User): Observable<AuthState> {
    return this.handleAuthResponse(
      this.http.post<AuthResponse>(`${this.baseUrl}/register`, user)
    );
  }

  private handleAuthResponse(
    obs: Observable<AuthResponse>
  ): Observable<AuthState> {
    return obs.pipe(
      tap((response) => {
        if (response.token) localStorage.setItem('token', response.token);
      }),
      map((response) => ({
        valid: !response.error,
        message: response.message,
        error: response.error || undefined,
      })),
      catchError((error) => {
        const message = error?.error?.message || 'An unexpected error occurred';
        return of({ valid: false, message, error: JSON.stringify(error) });
      })
    );
  }
}
