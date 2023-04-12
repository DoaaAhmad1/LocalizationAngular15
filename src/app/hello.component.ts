import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'hello',
  template: `
    <h1>Hello {{name}}!</h1>
    
  `,
})
export class HelloComponent {
  @Input() name: string;

  firstName = new FormControl('');

  constructor() {
    // This is now typed: val is a string
    this.firstName.valueChanges.subscribe(
      (val) => (this.name = val.toUpperCase())
    );
  }
}
