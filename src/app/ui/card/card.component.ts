import { Component, Input } from '@angular/core';
import { NgClass, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GlobalStateService } from '../../global-state.service';

@Component({
    selector: 'app-card',
    imports: [SlicePipe, NgClass, RouterLink],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data:any;
  @Input() showBorder: boolean = false;
  @Input() routeLink: string = '';
  @Input() showAddToCart: boolean = false; 

  constructor(public ProductSet:GlobalStateService ){}
}
