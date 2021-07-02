import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurrowedBooksComponent } from './burrowed-books.component';

describe('BurrowedBooksComponent', () => {
  let component: BurrowedBooksComponent;
  let fixture: ComponentFixture<BurrowedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurrowedBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurrowedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
