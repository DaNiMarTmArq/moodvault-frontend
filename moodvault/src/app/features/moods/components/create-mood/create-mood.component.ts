import { Component, signal } from '@angular/core';
import { WrapperLayoutComponent } from '../../../../shared/layouts/wrapper-layout/wrapper-layout.component';
import { RangeInput } from './components/range-input.component';
import { FormsModule } from '@angular/forms';
import { CenterLayoutComponent } from '../../../../shared/layouts/center-layout/center-layout.component';

@Component({
  selector: 'app-create-mood',
  standalone: true,
  imports: [
    WrapperLayoutComponent,
    RangeInput,
    FormsModule,
    CenterLayoutComponent,
  ],
  templateUrl: './create-mood.component.html',
})
export class CreateMood {
  createMoodStep = signal(1);
  sliderTouched = signal(false);
  moodScore = signal(3.0);

  getMoodScore(score: number) {
    if (!this.sliderTouched()) this.sliderTouched.set(true);
    this.moodScore.set(score);
  }
}
