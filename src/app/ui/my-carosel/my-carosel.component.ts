import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-carosel',
  standalone: true,
  imports: [],
  templateUrl: './my-carosel.component.html',
  styleUrl: './my-carosel.component.scss',
})
export class MyCaroselComponent {
  @Input() itemList = [
    {
      id: 1,
      image: 'images/kerala1.avif',
    },
    {
      id: 2,
      image: 'images/kerala2.jpg',
    },
    {
      id: 3,
      image: 'images/kerala.jpg',
    },
    {
      id: 4,
      image: 'images/2.jpg',
    },
    {
      id: 5,
      image: 'images/3.jpg',
    },
    {
      id: 6,
      image: 'images/kerala-family-celebrating.avif',
    },
    {
      id: 7,
      image: 'images/KeralaTheyyam 1.jpg',
    },
  ];
}
