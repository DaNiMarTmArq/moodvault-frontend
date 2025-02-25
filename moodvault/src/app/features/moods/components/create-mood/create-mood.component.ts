import { Component } from '@angular/core';
import { WrapperLayoutComponent } from '../../../../shared/layouts/wrapper-layout/wrapper-layout.component';

@Component({
  selector: 'app-create-mood',
  standalone: true,
  imports: [WrapperLayoutComponent],
  templateUrl: './create-mood.component.html',
})
export class CreateMood {}
