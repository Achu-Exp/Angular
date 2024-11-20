import { Component, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { CaroselCardComponent } from "../../ui/carosel-card/carosel-card.component";

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [CaroselCardComponent],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {

  constructor(public api:ApiService) {}
  categories:[]=[];
   @Input() category:string=""

 ngOnInit(){
  this.api.getCategory().subscribe((res:any) => {
    this.categories=res;
    console.log(this.categories)
  });
 }
}
