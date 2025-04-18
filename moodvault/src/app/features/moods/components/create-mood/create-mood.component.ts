import { Component, inject, signal } from '@angular/core';
import { WrapperLayoutComponent } from '../../../../shared/layouts/wrapper-layout/wrapper-layout.component';
import { RangeInput } from './components/range-input/range-input.component';
import { FormsModule } from '@angular/forms';
import { CenterLayoutComponent } from '../../../../shared/layouts/center-layout/center-layout.component';
import { AttributeService } from '../../../../shared/services/AttributeService';
import { AttributeComponent } from '../attribute/attribute.component';
import { NewattributeComponent } from '../newattribute/newattribute.component';

interface Attribute {
  value: string;
  active: boolean;
}

@Component({
  selector: 'app-create-mood',
  standalone: true,
  imports: [
    WrapperLayoutComponent,
    RangeInput,
    FormsModule,
    CenterLayoutComponent,
    AttributeComponent,
    NewattributeComponent,
  ],
  templateUrl: './create-mood.component.html',
})
export class CreateMood {
  createMoodStep = signal(1);
  sliderTouched = signal(false);
  moodScore = signal(3.0);
  attributeService = inject(AttributeService);
  attributes = signal<Attribute[]>([]);

  setMoodScore(score: number) {
    if (!this.sliderTouched()) this.sliderTouched.set(true);
    this.moodScore.set(score);
  }

  get moodState() {
    if (this.moodScore() <= 1) return 'Muy malo';
    if (this.moodScore() <= 2) return 'Malo';
    if (this.moodScore() <= 3) return 'Neutral';
    if (this.moodScore() <= 4) return 'Ligeramente bueno';
    if (this.moodScore() <= 5) return 'Muy bueno';
    return 'Neutral';
  }

  nextStep() {
    const nextStep = this.createMoodStep() + 1;
    if (nextStep === 2) {
      const attributes = this.attributeService
        .getAttributesByScore(this.moodScore())
        .map((attr) => {
          return {
            value: attr,
            active: false,
          };
        });
      this.attributes.set(attributes);
    }
    if (nextStep <= 3) this.createMoodStep.set(nextStep);
  }

  previousStep() {
    const previousStep = this.createMoodStep() - 1;
    if (previousStep === 1) {
      this.attributes.set([]);
    }
    if (this.createMoodStep() >= 1) this.createMoodStep.set(previousStep);
  }

  addActiveAttribute(attribute: Attribute) {
    const attributes = this.attributes();
    const index = attributes.findIndex(
      (attr) => attr.value === attribute.value
    );
    this.attributes()[index].active = attribute.active;
  }

  setNewAttribute(value: string) {
    const newAttribute: Attribute = {
      value,
      active: true,
    };

    const attributes = this.attributes();
    attributes.push(newAttribute);
  }
}
