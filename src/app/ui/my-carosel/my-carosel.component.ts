import { Component, Input } from '@angular/core';
import { BootstrapCarosel } from '../../interface/bottstrap-card.components';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-my-carosel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './my-carosel.component.html',
  styleUrl: './my-carosel.component.scss',
})
export class MyCaroselComponent {
@Input() data: BootstrapCarosel[]=[]

}
