import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutpageComponent } from './produtpage.component';

describe('ProdutpageComponent', () => {
  let component: ProdutpageComponent;
  let fixture: ComponentFixture<ProdutpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
