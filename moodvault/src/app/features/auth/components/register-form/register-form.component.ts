import { Component } from '@angular/core';
import { CenterLayoutComponent } from '../../../../shared/layouts/center-layout/center-layout.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CenterLayoutComponent, RouterModule],
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {

}
