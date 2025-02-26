import { Component, signal } from '@angular/core';
import { WrapperLayoutComponent } from '../../../../shared/layouts/wrapper-layout/wrapper-layout.component';
import { RangeInput } from './components/range-input.component';

@Component({
  selector: 'app-create-mood',
  standalone: true,
  imports: [WrapperLayoutComponent, RangeInput],
  templateUrl: './create-mood.component.html',
})
export class CreateMood {}
