import { Component, OnInit } from '@angular/core';
import {BookService} from "../services/book.service";
import {BookModel} from "../shared/book.model";

@Component({
  selector: 'app-book-action-view',
  templateUrl: './book-action-view.component.html',
  styleUrls: ['./book-action-view.component.css']
})
export class BookActionViewComponent implements OnInit {

  isAdding: boolean;
  isEditing: boolean;
  hasChosenAction:boolean;
  showResult: boolean;
  success: boolean;
  info: string;

  public title: string;
  public author: string;
  public ISBN: number;

  constructor(
    private bookService: BookService,
  ) {

  }

  ngOnInit(): void {
    this.isAdding = false;
    this.hasChosenAction = false;
    this.isEditing = false;
    this.showResult = false;
    this.success = false;
  }

  startEditing = (e) => {
    this.hasChosenAction = true;
    this.isEditing = true;
  }
  startAdding = (e) => {
    this.hasChosenAction = true;
    this.isAdding = true;
  }

  setTitle(val){
    this.title = val.target.value;
  }

  setAuthor(val){
    this.author = val.target.value;
  }

  setISBN(val){
    this.ISBN = val.target.value;
  }

  AddNewBook = (e) => {
    //console.log(e + "/" + this.title + "/" + this.author + "/" + this.ISBN);
    let book = new BookModel(this.title, this.author, this.ISBN, false)
    this.bookService.addBook(book)
    this.success = true;
    this.showResult = true;
  }

  EditCurrentBook = (e) => {
    let book = this.bookService.getBookByTitle(this.title);
    this.showResult = true;
    if(book == null){
      //console.log("AAAAAAAAA");
      this.info = "Could not find entry with title " + this.title;
      return;
    }
    else{
      this.info = "new author: " + this.author + "\n new ISBN number: " + this.ISBN;
      book.author = this.author;
      book.ISBN = this.ISBN;
      this.success = true;
    }


  }
}
