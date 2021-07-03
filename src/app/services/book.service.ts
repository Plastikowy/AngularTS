import {BookModel} from "../shared/book.model";
import {Injectable} from "@angular/core";
import {ReaderService} from "./reader.service";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public book: BookModel;
  public books: BookModel[] = [];

  constructor(
    private passReadersService: ReaderService,

  ) {
    this.AddRandomBooks();
  }

  private AddRandomBooks() {
    this.books.push(new BookModel("Mistrz i Małgorzata", "Michaił Bułhakow", 2391386315023, false));
    let book1 = new BookModel("Harry Potter i Więzień Azkabanu", "J.K.Rowling", 8139246500983, true);
    book1.person = this.passReadersService.getReaders()[0];
    this.passReadersService.getReaders()[0].borrowBook(book1);
    book1.dueDate = new Date(2021, 8, 2, 20,1,0,0);
    this.books.push(book1);
    this.books.push(new BookModel("Wodnikowe Wzgórze", "Richard Adams", 8271935677130, false));
    this.books.push(new BookModel("Bastion", "Stephen King", 6622338877113, false));
    this.books.push(new BookModel("To", "Stephen King", 1231341567897, false));
  }

  setBookToPass(book:BookModel){
    this.book = book;
  }

  getBook(){
    return this.book;
  }

  getBookByTitle(title: string){
    return this.books.find(t => t.title == title);
  }

  getAllBooks(){
    return this.books;
  }

  addBook(book: BookModel){
    this.books.push(book);
  }
}
