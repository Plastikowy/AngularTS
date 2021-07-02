import {BookModel} from "./book.model";

export class PersonModel{
  public _name: string;
  public _surname: string;
  public borrowedBooks: BookModel[] = [];

  constructor(name: string, surname: string) {
    this._name = name;
    this._surname = surname;
  }

  borrowBook(book:BookModel){
    this.borrowedBooks.push(book);
  }

  returnBook(book:BookModel){
    let index = this.borrowedBooks.indexOf(book);
    this.borrowedBooks.splice(index, 1);
  }

  getBorrowedBooks(){
    return this.borrowedBooks;
  }

  GetFullName(){
    return this._name + " " + this._surname;
  }
}
