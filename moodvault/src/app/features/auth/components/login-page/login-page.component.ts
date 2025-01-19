import { Component } from '@angular/core';
import { LoginBarComponent } from '../login-bar/login-bar.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterModule,LoginBarComponent, LoginFormComponent],
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {

}
