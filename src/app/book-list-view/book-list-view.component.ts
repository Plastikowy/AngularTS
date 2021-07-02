import { Component, OnInit } from '@angular/core';
import {BookModel} from "../shared/book.model";
import { Router} from "@angular/router";
import {BookViewComponent} from "../book-view/book-view.component";
import {PassbookService} from "../services/passbook.service";
import {PersonModel} from "../shared/person.model";
import {PassReadersService} from "../services/passReaders.service";

@Component({
  selector: 'app-book-list-view',
  templateUrl: './book-list-view.component.html',
  styleUrls: ['./book-list-view.component.css']
})
export class BookListViewComponent implements OnInit {

  public books: BookModel[] = [];

  constructor(
    private router: Router,
    private passBookService: PassbookService,
    private passReadersService: PassReadersService,
  ) {
    this.AddRandomReaders();
    this.AddRandomBooks();
  }

  ngOnInit(): void {
  }

  private AddRandomBooks() {
    this.books.push(new BookModel("Mistrz i Małgorzata", "Michaił Bułhakow", 2391386315023, false));
    let book1 = new BookModel("Harry Potter i Więzień Azkabanu", "J.K.Rowling", 8139246500983, true);
    book1.person = this.passReadersService.getReaders()[0];
    book1.dueDate = new Date(2021, 8, 2, 20,1,0,0);
    this.books.push(book1);
  }

  public ShowBook(book: BookModel){
  this.passBookService.setBookToPass(book);
    this.router.navigate(['book'])

  }

  private AddRandomReaders() {
    console.log("AAAAAAAAAAAAAA");
    this.passReadersService.addReader(new PersonModel("Cezary", "Lapka"));
    this.passReadersService.addReader(new PersonModel("Tomek", "Samól"));
    this.passReadersService.addReader(new PersonModel("Leszek", "Placek"));
  }
}
