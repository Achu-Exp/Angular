import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselofcardsComponent } from './caroselofcards.component';

describe('CaroselofcardsComponent', () => {
  let component: CaroselofcardsComponent;
  let fixture: ComponentFixture<CaroselofcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaroselofcardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaroselofcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
