import { Component, OnInit } from '@angular/core';
import {PersonModel} from "../shared/person.model";
import {ReaderService} from "../services/reader.service";

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.css']
})
export class ReadersComponent implements OnInit {

  public readers: PersonModel[] = [];
  public reader: PersonModel;
  viewRead: boolean = false;

  constructor(
    private passReadersService: ReaderService,
    ) {
    this.readers = this.passReadersService.getReaders();
  }

  ngOnInit(): void {
  }

  setReader(reader: PersonModel){
    this.reader = reader;
    console.log(this.viewRead);
    this.viewRead = true;
    console.log(this.viewRead);
  }

}
