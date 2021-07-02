export class PersonModel{
  private _name: string;
  private _surname: string;

  constructor(name: string, surname: string) {
    this._name = name;
    this._surname = surname;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  GetFullName(){
    return this._name + " " + this._surname;
  }
}
