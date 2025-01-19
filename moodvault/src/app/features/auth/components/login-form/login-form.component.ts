import { Component } from '@angular/core';
import { CenterLayoutComponent } from '../../../../shared/layouts/center-layout/center-layout.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {}
