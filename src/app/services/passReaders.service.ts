import {BookModel} from "../shared/book.model";
import {Injectable} from "@angular/core";
import {PersonModel} from "../shared/person.model";

@Injectable({
  providedIn: 'root'
})
export class PassReadersService{
  public readers: PersonModel[] = [];

  addReader(person:PersonModel){
    this.readers.push(person);
  }

  getReaders(){
    return this.readers;
  }
}
