import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/auth/components/login-page/login-page.component';
import { LoginFormComponent } from './features/auth/components/login-form/login-form.component';
import { RegisterFormComponent } from './features/auth/components/register-form/register-form.component';
import { MoodsListView } from './features/moods/components/dashboard-home/dashboard-home.component';
import { loginGuard } from './shared/route-guards/loginGuard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/moods/list',
    pathMatch: 'full',
  },
  {
    path: 'moods',
    canActivate: [loginGuard],
    children: [
      {
        path: 'list',
        component: MoodsListView,
        title: 'MoodVault - Moods List',
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
    redirectTo: '/moods/list',
    pathMatch: 'full',
  },
];
