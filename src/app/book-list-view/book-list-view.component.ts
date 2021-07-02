import { Component, OnInit } from '@angular/core';
import {BookModel} from "../shared/book.model";
import { Router} from "@angular/router";
import {BookViewComponent} from "../book-view/book-view.component";
import {BookService} from "../services/book.service";
import {PersonModel} from "../shared/person.model";
import {ReaderService} from "../services/reader.service";

@Component({
  selector: 'app-book-list-view',
  templateUrl: './book-list-view.component.html',
  styleUrls: ['./book-list-view.component.css']
})
export class BookListViewComponent implements OnInit {

  public books: BookModel[] = [];

  constructor(
    private router: Router,
    private passBookService: BookService,
  ) {
    this.books = passBookService.getAllBooks();
  }

  ngOnInit(): void {
  }

  public ShowBook(book: BookModel){
  this.passBookService.setBookToPass(book);
    this.router.navigate(['book'])

  }


}
