import {PersonModel} from "./person.model";

export class BookModel{
  public title: string;
  public author: string;
  public ISBN: number;
  public isBorrowed: boolean;
  public dueDate;
  public person:PersonModel;

  constructor(title: string, author:string, ISBN:number,isBorrowed:boolean) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isBorrowed = isBorrowed;
  }

}
