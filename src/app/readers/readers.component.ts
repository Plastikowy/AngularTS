import { Component, OnInit } from '@angular/core';
import {PersonModel} from "../shared/person.model";
import {PassReadersService} from "../services/passReaders.service";

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.css']
})
export class ReadersComponent implements OnInit {

  public readers: PersonModel[] = [];

  constructor(
    private passReadersService: PassReadersService,
    ) {
    this.readers = this.passReadersService.getReaders();
  }

  ngOnInit(): void {
  }

}
