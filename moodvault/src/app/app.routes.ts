import { Routes } from '@angular/router';
import { LoginFormComponent } from './features/auth/components/login-form/login-form.component';
import { LoginPageComponent } from './features/auth/components/login-page/login-page.component';
import { RegisterFormComponent } from './features/auth/components/register-form/register-form.component';
import { MoodsDashboard } from './features/moods/components/dashboard/dashboard-home.component';
import { loginGuard } from './shared/route-guards/loginGuard';
import { CreateMood } from './features/moods/components/create-mood/create-mood.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/moods/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'moods',
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
    component: LoginPageComponent,
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
