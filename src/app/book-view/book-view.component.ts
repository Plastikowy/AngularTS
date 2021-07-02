import {Component, Injectable, Input, OnInit} from '@angular/core';
import {BookModel} from "../shared/book.model";
import {BookService} from "../services/book.service";
import {PersonModel} from "../shared/person.model";
import {ReaderService} from "../services/reader.service";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  public book: BookModel;
  public readers: PersonModel[] = [];

  constructor(
    private passBookService: BookService,
    private passReadersService: ReaderService,
  ) {
    this.book = this.passBookService.getBook();
    this.readers = this.passReadersService.getReaders();
  }

  ngOnInit(): void {

  }

  Return(person: PersonModel){
    this.book.isBorrowed = false;
    this.book.person = null;
    person.returnBook(this.book);
  }

  Borrow(person: PersonModel){
    this.book.isBorrowed = true;
    this.book.dueDate = new Date(Date.now());
    this.book.dueDate.setMonth(this.book.dueDate.getMonth() + 3);
    this.book.person = person;
    person.borrowBook(this.book);
  }
}
