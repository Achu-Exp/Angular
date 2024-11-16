import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselCardComponent } from './carosel-card.component';

describe('CaroselCardComponent', () => {
  let component: CaroselCardComponent;
  let fixture: ComponentFixture<CaroselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaroselCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaroselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
