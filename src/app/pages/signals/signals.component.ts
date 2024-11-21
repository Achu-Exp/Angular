import { Component, signal } from '@angular/core';
import { GlobalStateService } from '../../global-state.service';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  constructor(public counterSet:GlobalStateService) {}
  

}
