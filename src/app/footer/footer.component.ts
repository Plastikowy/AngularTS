import {Component, Input} from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  @Input() authorName: string
  @Input() indexNumber: number
  constructor() {
    this.authorName = "Tomasz Samól";
    this.indexNumber = 19331;
  }

}
