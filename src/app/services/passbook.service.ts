import {BookModel} from "../shared/book.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PassbookService{
  public book: BookModel;

  setBookToPass(book:BookModel){
    this.book = book;
  }

  getBook(){
    return this.book;
  }
}
