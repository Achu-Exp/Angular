import { ApiService } from './../../api.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-produtpage',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './produtpage.component.html',
  styleUrl: './produtpage.component.scss'
})
export class ProdutpageComponent {
products:any

  constructor(private activted_route:ActivatedRoute,public api:ApiService) {}

  ngOnInit() {
  let id = this.activted_route.snapshot.paramMap.get('id');
  console.log(id)

  this.api.getProdutsByid(id).subscribe((res) => {
  this.products=res;



  });
}

getStars(rating: number): { full: number; half: number; empty: number } {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  return { full: fullStars, half: halfStar, empty: emptyStars };
}

}
