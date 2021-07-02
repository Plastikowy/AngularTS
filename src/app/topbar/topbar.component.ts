import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  constructor(private router: Router) { }

  BookList(){
    this.router.navigate(['booklist']);
  }

  Reader(){
    this.router.navigate(['readers']);
  }

  Catalog(){
    this.router.navigate(['catalog']);
  }

  AddEdit(){
    this.router.navigate(['addEdit']);
  }
}
