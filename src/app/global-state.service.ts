import { computed, Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {

  constructor(public api:ApiService) { }

counter= signal(0)
doubleCounter = computed(() => this.counter() * 2);

increment(){
  this.counter.update(value => value+1)
 }
 decrement(){
   this.counter.update(value => value-1)

 }
 reset(){
  this.counter.set(0)
 }


cart =  signal<any[]>([]);


addToCart(item: any) {
  this.cart.update(value=>{
    value.push(item)
    return value
  })
}
removeFromCart(id:any) {
  this.cart.set(this.cart().filter((product) => product.id !== id));
  console.log(`Product with ID ${id} removed. Updated cart:`, this.cart());
}
}



// addToCart(id: any) {
//   this.api.getProdutsByid(id).subscribe((res: any) => {
//     const currentCart = this.cart();
//     this.cart.set([...currentCart, res]);
//     console.log('Product added to cart:', res);
//     console.log(this.cart);

//   });
// }





