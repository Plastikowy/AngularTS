import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ReadersComponent} from "./readers/readers.component";
import {BookListViewComponent} from "./book-list-view/book-list-view.component";
import {CatalogViewComponent} from "./catalog-view/catalog-view.component";
import {BookActionViewComponent} from "./book-action-view/book-action-view.component";
import {BookViewComponent} from "./book-view/book-view.component";

const routes: Routes = [
  { path: 'readers', component: ReadersComponent},
  {path:'booklist', component: BookListViewComponent},
  {path:'catalog', component: CatalogViewComponent},
  {path:'addEdit', component: BookActionViewComponent},
  {path:'book',component:BookViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
