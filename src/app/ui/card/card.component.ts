import { Component, Input } from '@angular/core';
import { BootstrapCard } from '../../interface/bottstrap-card.components';
import { MyButtonComponent } from "../my-button/my-button.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MyButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
}
