import { Component } from '@angular/core';
import { GlobalStateService } from '../../global-state.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(public productList:GlobalStateService) {}
  ngOnInit(){
    console.log(this.productList.cart())
  }
}
