import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CenterLayoutComponent } from '../center-layout/center-layout.component';

@Component({
  selector: 'auth-layout',
  templateUrl: './auth-layout.component.html',
  standalone: true,
  imports: [RouterModule, CenterLayoutComponent],
})
export class AuthLayoutComponent {}
