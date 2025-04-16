import { NgClass } from '@angular/common';
import { Component, Input, input, output } from '@angular/core';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [NgClass],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css',
})
export class AttributeComponent {
  attributeText = input<string>('');
  @Input() isActive = false;
  score = input(3.0);
  emitToggle = output<{ value: string; active: boolean }>({ alias: 'toggle' });

  get attributeClass() {
    const baseClasses =
      'inline-block rounded-full border px-4 py-2 mx-2 w-fit cursor-pointer';

    const scoreValue = this.score();
    const active = this.isActive;

    let moodClass = '';

    if (scoreValue <= 2) {
      moodClass = active
        ? 'border-veryUnpleasant bg-veryUnpleasant text-white'
        : 'border-veryUnpleasant text-veryUnpleasant';
    } else if (scoreValue < 3) {
      moodClass = active
        ? 'border-unpleasant bg-unpleasant text-white'
        : 'border-unpleasant text-unpleasant';
    } else if (scoreValue === 3) {
      moodClass = active
        ? 'border-neutral bg-neutral text-white'
        : 'border-neutral text-neutral';
    } else if (scoreValue < 5) {
      moodClass = active
        ? 'border-pleasant bg-pleasant text-white'
        : 'border-pleasant text-pleasant';
    } else if (scoreValue === 5) {
      moodClass = active
        ? 'border-veryPleasant bg-veryPleasant text-white'
        : 'border-veryPleasant text-veryPleasant';
    }

    return `${baseClasses} ${moodClass}`;
  }

  toggleActive() {
    this.isActive = !this.isActive;
    this.emitToggle.emit({
      value: this.attributeText(),
      active: this.isActive,
    });
  }
}
