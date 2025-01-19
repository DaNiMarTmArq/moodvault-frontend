import { Component } from '@angular/core';
import { LoginBarComponent } from '../login-bar/login-bar.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { CenterLayoutComponent } from "../../../../shared/layouts/center-layout/center-layout.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterModule, LoginBarComponent, CenterLayoutComponent],
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {

}
