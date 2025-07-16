import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'spinner-app-link',
  imports: [RouterLink],
  templateUrl: './link.html',
})
export class Link {
  readonly path = input.required<string>();
}
