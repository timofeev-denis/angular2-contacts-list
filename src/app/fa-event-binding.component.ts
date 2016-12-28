import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <p>
      fa-event-binding Works!
    </p>
	<button (click)="testClickEvent()">Click me</button>
  `,
  styles: []
})
export class FaEventBindingComponent {
	testClickEvent() {
		alert("Click!");
	}
}
