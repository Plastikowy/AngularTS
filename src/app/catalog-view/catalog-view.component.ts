import { Component, OnInit } from '@angular/core';
import {BookService} from "../services/book.service";
import {BookModel} from "../shared/book.model";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {startWith, map} from "rxjs/operators";

@Component({
  selector: 'app-catalog-view',
  templateUrl: './catalog-view.component.html',
  styleUrls: ['./catalog-view.component.css']
})
export class CatalogViewComponent implements OnInit {

  books: BookModel[] = [];
  myControl = new FormControl();
filteredOptions: Observable<BookModel[]>;

  constructor(
    private BookService: BookService,
  ) {
    this.books = this.BookService.getAllBooks();
  }

  ngOnInit(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)))
  }

  private _filter(value: string): BookModel[]{
    const filterValue = value;
    console.log("XXXXXXXXXXXXX:" + filterValue);
    return this.books.filter(book => book.title.includes(filterValue));
  }
}
