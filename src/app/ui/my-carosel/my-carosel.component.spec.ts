import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCaroselComponent } from './my-carosel.component';

describe('MyCaroselComponent', () => {
  let component: MyCaroselComponent;
  let fixture: ComponentFixture<MyCaroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCaroselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
