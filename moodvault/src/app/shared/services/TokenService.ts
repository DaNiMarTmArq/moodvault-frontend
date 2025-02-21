import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

interface JWTPayload {
  id: string;
  username: string;
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  decodeToken(token: string): JWTPayload | null {
    try {
      return jwtDecode<JWTPayload>(token);
    } catch (error) {
      return null;
    }
  }

  isTokenValid(token: string | null): boolean {
    if (!token) return false;

    const decoded = this.decodeToken(token);
    if (!decoded || !decoded.exp) return false;

    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp > currentTime;
  }
}
