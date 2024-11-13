import { Component } from '@angular/core';
import { MyButtonComponent } from '../my-button/my-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-card',
  standalone: true,
  imports: [MyButtonComponent,CommonModule],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.scss'
})
export class MyCardComponent {
  districtList =[
    {
      id:1,
      name:'Thiruvananthapuram',
      image:'images/TVM.jpeg',
      description:'The capital city of Kerala, known for its historic landmarks, temples, and beaches',

    },
    {
      id:2,
      name:'Kollam',
      image:'images/KOLLAM.webp',
      description:'Known for its cashew processing and trading industry, and was once home to the legendary Muziris port',
    },
    {
      id:3,
      name:'Pathanamthitta',
      image:'images/patanamthitta.webp',
      description:'A densely forested district and a prominent pilgrimage center, known for the Sabarimala temple',
    },
    {
      id:4,
      name:'Alappuzha',
      image:'images/aalpi.jpg',
      description:'Known as the "Venice of the East", famous for its backwaters, houseboat cruises, and the Nehru Trophy Boat Race',
    },
    {
      id:5,
      name:'Kottayam',
      image:'images/kottayam.webp',
      description:'Known for its rubber and spice trade, and home to picturesque lakes like Vembanad Lake',
    },
    {
      id:6,
      name:'Idduki',
      image:'images/idduki.jpg',
      description:'One of the most beautiful districts of Kerala, known for its spice plantations, emerald green hills, and rivers',
    },
    {
      id:7,
      name:'Ernakulam',
      image:'images/erna.jpg',
      description:'The most urbanized district in Kerala, with a municipal corporation and 11 municipalities',
    },
    {
      id:8,
      name:'Thrissur',
      image:'images/thrissur.jpg',
      description:'Thrissur is a district and city in Kerala, India, known as the cultural capital of the state',
    },
    {
      id:9,
      name:'Palakkad',
      image:'images/pallakad.jpg',
      description:'Palakkad is known as the Rice Bowl of Kerala because of its significant role in the states rice production. Its also known for its hilly landscape, fertile plains, and many dams',
    },
    {
      id:10,
      name:'Malappuram',
      image:'images/malappuram.jpg',
      description:'Malappuram is a district in the state of Kerala, India, known for its natural beauty, rich history, and cultural heritage',
    },
    {
      id:11,
      name:'Kozhikode',
      image:'images/kozhikode.jpg',
      description:'Kozhikode, also known as Calicut, is a city in the state of Kerala, India. Its a major city in the Malabar Coast region and the headquarters of the Kozhikode district. Heres some information about Kozhikode',
    },
    {
      id:12,
      name:'Wayanad',
      image:'images/wayanad.jpg',
      description:'Wayanad is known for its green highlands, valleys, cool climate, and many attractions, including:Waterfalls,Caves etc..'
    },
    {
      id:13,
      name:'Kannur',
      image:'images/kannur.webp',
      description:'Kannur, also known as Cannanore, is a district in the northern region of Kerala, India',
    },
    {
      id:14,
      name:'Kasargod',
      image:'images/kasargod.jpg',
      description:'Kasaragod is a district in the northern part of Kerala, India, known for its beaches, backwaters, forts, and unique culture',
    },

 ];
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

