import { Component, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardComponent } from "../card/card.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-carosel-card',
    imports: [CardComponent, CarouselModule],
    templateUrl: './carosel-card.component.html',
    styleUrl: './carosel-card.component.scss'
})
export class CaroselCardComponent {


  constructor(public api:ApiService) {}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  @Input() routeLink: string = "";
  @Input() category:string=""
  products:any

ngOnInit(){
  console.log(this.category)
   this.api.getProductsByCategory(this.category).subscribe((res) => {
   this.products=res;

 });
}
}
