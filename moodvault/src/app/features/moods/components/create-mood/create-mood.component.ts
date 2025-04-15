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
    if (!this.sliderTouched() && score !== this.moodScore())
      this.sliderTouched.set(true);
    this.moodScore.set(score);
  }

  moodState() {
    if (this.moodScore() <= 1) return 'Muy malo';
    if (this.moodScore() <= 2) return 'Malo';
    if (this.moodScore() <= 3) return 'Neutral';
    if (this.moodScore() <= 4) return 'Ligeramente bueno';
    if (this.moodScore() <= 5) return 'Muy bueno';
    return 'Neutral';
  }

  nextStep() {
    if (this.createMoodStep() <= 3)
      this.createMoodStep.set(this.createMoodStep() + 1);
  }

  previousStep() {
    if (this.createMoodStep() >= 1)
      this.createMoodStep.set(this.createMoodStep() - 1);
  }
}
