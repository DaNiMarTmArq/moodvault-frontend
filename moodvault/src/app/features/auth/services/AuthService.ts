import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/User';
import { AuthResponse } from '../models/AuthResponse';
import { IAuthService } from './IAuthService';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {
  private readonly baseUrl =
    'https://moodvault-server.onrender.com/api/v1/auth';
  private http = inject(HttpClient);
  private router = inject(Router);

  login(user: User): Observable<boolean> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, user).pipe(
      map((response) => {
        if (response.error) return false;
        localStorage.setItem('token', response.token);
        return true;
      }),
      catchError((error) => {
        console.error('Login failed', error);
        return of(false);
      })
    );
  }

  register(user: User): Observable<boolean> {
    throw new Error();
  }
}
