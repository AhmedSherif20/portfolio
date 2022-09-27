import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Pagination, Navigation]);
interface service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: service[] = [];

  public swiperConfig = {
    slidesPerView: 4,
    spaceBetween: 30,
    FreeMode: true,
    navigation: true,
    pagination: { clickable: true },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };
  constructor() {}

  ngOnInit(): void {
    this.services = [
      {
        icon: 'far fa-file-code',
        title: 'Clean Code',
        description:
          "write clean code that's good for SEO and for future updates.",
      },
      {
        icon: 'fas fa-code',
        title: 'Front-End Development',
        description:
          'good experience with Front End Technologies as HTML, CSS and JS',
      },
      {
        icon: 'fa-solid fa-server',
        title: 'Back-End Development',
        description:
          'good experience with Back End Technologies as JavaScript, Nodejs and Expressjs',
      },
      {
        icon: 'fas fa-pencil-ruler',
        title: 'Responsive Design',
        description:
          'build any website with responsive design to look good at all devices.',
      },
      {
        icon: 'fab fa-angular',
        title: 'Single Page App',
        description:
          'web app that interacts with the user by dynamically rewriting the content.',
      },
      {
        icon: 'fa-solid fa-shield',
        title: 'Security',
        description:
          'I develop apps with high Security in server side and client side',
      },
    ];

    this.services = this.shuffle(this.services);
  }
  shuffle(array: any[]) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
