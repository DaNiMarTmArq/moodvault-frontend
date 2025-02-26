import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-range-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './range-input.component.html',
  styleUrl: './range-input.component.css',
})
export class RangeInput {
  private readonly backgrounds = {
    veryUnpleasant: '#2F3E46',
    unpleasant: '#354F52',
    neutral: '#52796F',
    pleasant: '#99AF9E',
    veryPleasant: '#99AF9E',
  };
  inputValue = 3.0;

  setBackground(): string {
    if (this.inputValue <= 2.0) return this.backgrounds.veryUnpleasant;
    if (this.inputValue < 3.0) return this.backgrounds.unpleasant;
    if (this.inputValue < 4.0) return this.backgrounds.neutral;
    return this.backgrounds.pleasant;
  }

  get background(): string {
    return this.setBackground();
  }
}
