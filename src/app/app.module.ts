import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ReadersComponent } from './readers/readers.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookListViewComponent } from './book-list-view/book-list-view.component';
import { CatalogViewComponent } from './catalog-view/catalog-view.component';
import { BookActionViewComponent } from './book-action-view/book-action-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    ReadersComponent,
    BookViewComponent,
    BookListViewComponent,
    CatalogViewComponent,
    BookActionViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
