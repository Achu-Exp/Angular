import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyButtonComponent } from "./ui/my-button/my-button.component";
import { MyCardComponent } from './ui/my-card/my-card.component';
import { MyCaroselComponent } from "./ui/my-carosel/my-carosel.component";
import { MyDescriptionComponent } from "./ui/my-description/my-description.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyButtonComponent, MyCardComponent, MyCaroselComponent, MyDescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Achu';
}
