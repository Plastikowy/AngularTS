import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookActionViewComponent } from './book-action-view.component';

describe('BookActionViewComponent', () => {
  let component: BookActionViewComponent;
  let fixture: ComponentFixture<BookActionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookActionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookActionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
