import {BookModel} from "../shared/book.model";
import {Injectable} from "@angular/core";
import {PersonModel} from "../shared/person.model";

@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  public readers: PersonModel[] = [];

  constructor() {
    this.AddRandomReaders();
  }

  addReader(person:PersonModel){
    this.readers.push(person);
  }

  getReaders(){
    return this.readers;
  }

  private AddRandomReaders() {
    this.addReader(new PersonModel("Cezary", "Lapka"));
    this.addReader(new PersonModel("Tomek", "Samól"));
    this.addReader(new PersonModel("Leszek", "Placek"));
  }
}
