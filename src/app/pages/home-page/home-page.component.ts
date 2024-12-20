import { Component } from '@angular/core';
import { MyCaroselComponent } from "../../ui/my-carosel/my-carosel.component";
import { MyDescriptionComponent } from "../../ui/my-description/my-description.component";
import { CaroselofcardsComponent } from "../../ui/caroselofcards/caroselofcards.component";
import { BootstrapCard, BootstrapCarosel } from '../../interface/bottstrap-card.components';


@Component({
    selector: 'app-home-page',
    imports: [MyCaroselComponent, MyDescriptionComponent, CaroselofcardsComponent],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  item:BootstrapCarosel[] = [
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





  districtList:BootstrapCard[] =[
    {
      id:1,
      title:'Thiruvananthapuram',
      image:'images/TVM.jpeg',
      description:'The capital city of Kerala, known for its historic landmarks, temples, and beaches',

    },
    {
      id:2,
      title:'Kollam',
      image:'images/KOLLAM.webp',
      description:'Known for its cashew processing and trading industry, and was once home to the legendary Muziris port',
    },
    {
      id:3,
      title:'Pathanamthitta',
      image:'images/patanamthitta.webp',
      description:'A densely forested district and a prominent pilgrimage center, known for the Sabarimala temple',
    },
    {
      id:4,
      title:'Alappuzha',
      image:'images/aalpi.jpg',
      description:'Known as the "Venice of the East", famous for its backwaters, houseboat cruises, and the Nehru Trophy Boat Race',
    },
    {
      id:5,
      title:'Kottayam',
      image:'images/kottayam.webp',
      description:'Known for its rubber and spice trade, and home to picturesque lakes like Vembanad Lake',
    },
    {
      id:6,
      title:'Idduki',
      image:'images/idduki.jpg',
      description:'One of the most beautiful districts of Kerala, known for its spice plantations, emerald green hills, and rivers',
    },
    {
      id:7,
      title:'Ernakulam',
      image:'images/erna.jpg',
      description:'The most urbanized district in Kerala, with a municipal corporation and 11 municipalities',
    },
    {
      id:8,
      title:'Thrissur',
      image:'images/thrissur.jpg',
      description:'Thrissur is a district and city in Kerala, India, known as the cultural capital of the state',
    },
    {
      id:9,
      title:'Palakkad',
      image:'images/pallakad.jpg',
      description:'Palakkad is known as the Rice Bowl of Kerala because of its significant role in the states rice production. Its also known for its hilly landscape, fertile plains, and many dams',
    },
    {
      id:10,
      title:'Malappuram',
      image:'images/malappuram.jpg',
      description:'Malappuram is a district in the state of Kerala, India, known for its natural beauty, rich history, and cultural heritage',
    },
    {
      id:11,
      title:'Kozhikode',
      image:'images/kozhikode.jpg',
      description:'Kozhikode, also known as Calicut, is a city in the state of Kerala, India. Its a major city in the Malabar Coast region and the headquarters of the Kozhikode district. Heres some information about Kozhikode',
    },
    {
      id:12,
      title:'Wayanad',
      image:'images/wayanad.jpg',
      description:'Wayanad is known for its green highlands, valleys, cool climate, and many attractions, including:Waterfalls,Caves etc..'
    },
    {
      id:13,
      title:'Kannur',
      image:'images/kannur.webp',
      description:'Kannur, also known as Cannanore, is a district in the northern region of Kerala, India',
    },
    {
      id:14,
      title:'Kasargod',
      image:'images/kasargod.jpg',
      description:'Kasaragod is a district in the northern part of Kerala, India, known for its beaches, backwaters, forts, and unique culture',
    },

 ];



}
