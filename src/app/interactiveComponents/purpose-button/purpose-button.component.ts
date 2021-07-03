import {Component, Input} from '@angular/core';

@Component({
  selector: 'purpose-button',
  templateUrl: './purpose-button.component.html',
  styleUrls: ['./purpose-button.component.css']
})
export class PurposeButtonComponent{

  @Input() onClick;
  @Input() label;

  constructor() {
  }
}
