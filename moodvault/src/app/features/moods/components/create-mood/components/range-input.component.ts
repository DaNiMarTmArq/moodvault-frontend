import { Component, computed, input, output, signal } from '@angular/core';
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
    pleasant: '#84A98C',
    veryPleasant: '#99AF9E',
  };
  inputRangeValue = input<number>();
  rangeValue = signal(3.0);
  outputValue = output<number>({ alias: 'newValue' });

  ngOnInit() {
    if (
      this.inputRangeValue() &&
      this.inputRangeValue() !== this.rangeValue()
    ) {
      this.rangeValue.set(this.inputRangeValue()!);
    }
  }

  background = computed(() => {
    const value = this.rangeValue();
    if (value <= 2.0) return this.backgrounds.veryUnpleasant;
    if (value < 3.0) return this.backgrounds.unpleasant;
    if (value === 3.0) return this.backgrounds.neutral;
    if (value < 4.0) return this.backgrounds.pleasant;
    return this.backgrounds.veryPleasant;
  });

  updateInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value;
    if (value !== undefined) {
      this.rangeValue.set(parseFloat(value));
      this.outputValue.emit(this.rangeValue());
    }
  }
}
