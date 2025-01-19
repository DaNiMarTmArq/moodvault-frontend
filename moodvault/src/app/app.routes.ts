import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/auth/components/login-page/login-page.component';
import { LoginFormComponent } from './features/auth/components/login-form/login-form.component';
import { RegisterFormComponent } from './features/auth/components/register-form/register-form.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'auth/login', pathMatch: 'full'
    },
    {
        path: 'auth', component: LoginPageComponent, 
        children: [
            {
                path: 'login', component: LoginFormComponent,
                title: 'MoodVault - Login'  
            },
            {
                path: 'register', component: RegisterFormComponent,
                title: 'MoodVault - Register'  
            }
        ]
    }
];

