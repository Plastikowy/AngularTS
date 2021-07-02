import {Component, Input, OnInit} from '@angular/core';
import {PersonModel} from "../shared/person.model";

@Component({
  selector: 'app-burrowed-books',
  templateUrl: './burrowed-books.component.html',
  styleUrls: ['./burrowed-books.component.css']
})
export class BurrowedBooksComponent implements OnInit {
@Input()  reader: PersonModel

  constructor() { }

  ngOnInit(): void {
  }

}
