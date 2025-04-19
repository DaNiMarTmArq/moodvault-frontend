import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/TokenService';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authPath = '/auth';
  if (req.url.includes(authPath)) return next(req);
  const authToken = inject(TokenService).getToken();
  if (!authToken) return next(req);
  const newReq = req.clone({
    headers: req.headers.append('Authorization', authToken),
  });
  return next(newReq);
};
