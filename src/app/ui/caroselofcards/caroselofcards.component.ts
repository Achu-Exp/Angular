import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { MyButtonComponent } from '../my-button/my-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-caroselofcards',
  standalone: true,
  imports: [ CommonModule, CardComponent],
  templateUrl: './caroselofcards.component.html',
  styleUrl: './caroselofcards.component.scss'
})
export class CaroselofcardsComponent {
  @Input() data:any;



  trackById(index: number, item: any): number {
   return item.id;
 }

 scrollLeft() {
   const container = document.querySelector('.card-container') as HTMLElement;
   if (container) {
     if (container.scrollLeft === 0) {
       container.scrollLeft = container.scrollWidth;
     } else {
       container.scrollLeft -= container.clientWidth;
     }
   }
 }

 scrollRight() {
   const container = document.querySelector('.card-container') as HTMLElement;
   if (container) {
     if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
       container.scrollLeft = 0;
     } else {
       container.scrollLeft += container.clientWidth;
     }
   }
 }
}
