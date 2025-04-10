import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CenterLayoutComponent } from '../../../../shared/layouts/center-layout/center-layout.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterModule, CenterLayoutComponent],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {}
