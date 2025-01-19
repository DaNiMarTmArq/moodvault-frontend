import { Component } from '@angular/core';
import { LoginBarComponent } from '../login-bar/login-bar.component';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginBarComponent, LoginFormComponent],
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {

}
