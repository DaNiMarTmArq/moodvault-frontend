import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { User } from '../../../shared/models/User';
import { AuthResponse } from '../models/AuthResponse';
import { AuthState, IAuthService } from './IAuthService';
import { TokenService } from '../../../shared/services/TokenService';
import { API_BASE_URL_AUTH } from '../../../shared/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {
  private readonly baseUrl = API_BASE_URL_AUTH;
  private http = inject(HttpClient);
  private tokenService = inject(TokenService);

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

  logout(): void {
    this.tokenService.removeToken();
  }

  isAuthenticated(): boolean {
    const token = this.tokenService.getToken();
    return this.tokenService.isTokenValid(token);
  }

  private handleAuthResponse(
    obs: Observable<AuthResponse>
  ): Observable<AuthState> {
    return obs.pipe(
      tap((response) => {
        const token = response.token;
        if (token) this.tokenService.setToken(token);
        const uuid = response.user.id;
        if (uuid) localStorage.setItem('uuid', uuid);
      }),
      map((response) => ({
        valid: !response.error,
        message: response.message,
        error: response.error || undefined,
      })),
      catchError((error: HttpErrorResponse) => {
        const message = error?.error.error || 'An unexpected error occurred';
        const status = error.status;
        return of({
          valid: false,
          message,
          error: error?.message || 'Unknown error',
          status,
        });
      })
    );
  }
}
