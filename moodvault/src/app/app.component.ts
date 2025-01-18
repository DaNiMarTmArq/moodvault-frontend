import { Component } from '@angular/core';
import { LoginBarComponent } from './features/auth/login-bar/login-bar.component';
import { LoginFormComponent } from './features/auth/login-form/login-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginBarComponent, LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'moodvault';
}
