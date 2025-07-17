import { Component, input, output } from '@angular/core';

@Component({
  selector: 'spinner-app-button',
  templateUrl: './button.html',
})
export class Button {
  readonly clickEvent = output();
  readonly label = input.required<string>();

  handleClick(): void {
    this.clickEvent.emit();
  }
}
