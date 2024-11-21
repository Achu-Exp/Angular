import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedelayComponent } from './timedelay.component';

describe('TimedelayComponent', () => {
  let component: TimedelayComponent;
  let fixture: ComponentFixture<TimedelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimedelayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimedelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
