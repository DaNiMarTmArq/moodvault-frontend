import { Component } from '@angular/core';
import { CenterLayoutComponent } from '../../../shared/layouts/center-layout/center-layout.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CenterLayoutComponent],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {}
