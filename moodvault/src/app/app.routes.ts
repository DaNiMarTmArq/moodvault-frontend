import { Routes } from '@angular/router';
import { LoginFormComponent } from './features/auth/components/login-form/login-form.component';
import { RegisterFormComponent } from './features/auth/components/register-form/register-form.component';
import { CreateMood } from './features/moods/components/create-mood/create-mood.component';
import { MoodsDashboard } from './features/moods/components/dashboard/dashboard-home.component';
import { AppLayoutComponent } from './shared/layouts/app-layout/app-layout.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { loginGuard } from './shared/route-guards/loginGuard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/moods/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'moods',
    component: AppLayoutComponent,
    canActivate: [loginGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: MoodsDashboard,
        canActivate: [loginGuard],
        title: 'MoodVault - Moods Dashboard',
      },
      {
        path: 'create',
        component: CreateMood,
        canActivate: [loginGuard],
        title: 'MoodVault - Crear Mood',
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginFormComponent,
        title: 'MoodVault - Login',
      },
      {
        path: 'register',
        component: RegisterFormComponent,
        title: 'MoodVault - Register',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/moods/dashboard',
    pathMatch: 'full',
  },
];
