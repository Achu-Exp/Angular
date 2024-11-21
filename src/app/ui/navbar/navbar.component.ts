import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GlobalStateService } from '../../global-state.service';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public cartItems:GlobalStateService) {}

}
