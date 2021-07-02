import {Component, Injectable, Input, OnInit} from '@angular/core';
import {BookModel} from "../shared/book.model";
import {PassbookService} from "../services/passbook.service";
import {PersonModel} from "../shared/person.model";
import {PassReadersService} from "../services/passReaders.service";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  public book: BookModel;
  public readers: PersonModel[] = [];

  constructor(
    private passBookService: PassbookService,
    private passReadersService: PassReadersService,
  ) {
    this.book = this.passBookService.getBook();
    this.readers = this.passReadersService.getReaders();
  }

  ngOnInit(): void {

  }

  Return(){
    this.book.isBorrowed = false;
    this.book.person = null;
  }

  Borrow(person: PersonModel){
    this.book.isBorrowed = true;
    this.book.dueDate = new Date(Date.now());
    this.book.dueDate.setMonth(this.book.dueDate.getMonth() + 3);
    this.book.person = person;
  }
}
