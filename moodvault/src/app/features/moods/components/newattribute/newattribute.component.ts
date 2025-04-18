import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newattribute',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newattribute.component.html',
  styleUrl: './newattribute.component.css',
})
export class NewattributeComponent {
  collapsed = signal(true);
  newAttribute = output<string>();
  attributeName = '';

  emitNewAttribute() {
    this.newAttribute.emit(this.attributeName);
    this.collapsed.set(true);
    this.attributeName = '';
  }
}
