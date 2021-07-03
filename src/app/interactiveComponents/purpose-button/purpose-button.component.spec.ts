import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeButtonComponent } from './purpose-button.component';

describe('PurposeButtonComponent', () => {
  let component: PurposeButtonComponent;
  let fixture: ComponentFixture<PurposeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurposeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
