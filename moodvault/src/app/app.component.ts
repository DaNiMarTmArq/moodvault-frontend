import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginBarComponent } from './features/auth/login-bar/login-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'moodvault';
}
