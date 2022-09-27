import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

interface Skill {
  icon: string;
  title: string;
  info: string;
  src: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      icon: 'fa-brands fa-html5',
      title: 'HTML',
      info: 'HTML is the standard markup language for Web pages.',
      src: 'https://www.w3schools.com/html/',
    },
    {
      icon: 'fa-brands fa-css3-alt',
      title: 'CSS',
      info: 'CSS is the language we use to style an HTML document.',
      src: 'https://www.w3schools.com/css/default.asp',
    },
    {
      icon: 'fa-brands fa-sass',
      title: 'SASS',
      info: 'Sass is a CSS pre-processor and reduces repetition of CSS and therefore saves time',
      src: 'https://www.w3schools.com/sass/',
    },
    {
      icon: 'fa-brands fa-square-js',
      title: 'JavaScript',
      info: "JavaScript is the world's most popular programming language.",
      src: 'https://www.w3schools.com/js/default.asp',
    },
    {
      icon: 'fa-brands fa-square-js',
      title: 'TypeScript',
      info: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
      src: 'https://www.w3schools.com/html/',
    },
    {
      icon: 'fa-brands fa-bootstrap',
      title: 'Bootstrap',
      info: ' the most popular HTML, CSS, and JavaScript framework for creating responsive, mobile-first websites.',
      src: 'https://www.w3schools.com/bootstrap5/index.php',
    },
    {
      icon: 'fa-brands fa-git-alt',
      title: 'GIT',
      info: 'Git is a free and open source distributed version control system',
      src: 'https://git-scm.com/',
    },
    {
      icon: 'fa-brands fa-github',
      title: 'Git hub',
      info: 'The complete developer platform to build, scale, and deliver secure software.',
      src: 'https://github.com/',
    },
    {
      icon: 'fa-brands fa-angular',
      title: 'Angular',
      info: "The modern web developer's platform",
      src: 'https://angular.io/',
    },
    {
      icon: 'fa-brands fa-react',
      title: 'React',
      info: 'A JavaScript library for building user interfaces',
      src: 'https://reactjs.org/',
    },
    {
      icon: 'fa-brands fa-node',
      title: 'node',
      info: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      src: 'https://nodejs.org/en/',
    },
    {
      icon: 'fa-brands fa-node-js',
      title: 'Express Js',
      info: 'Fast, unopinionated, minimalist web framework for Node.js',
      src: 'https://expressjs.com/',
    },
  ];

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
        slidesPerView: 2,
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

  ngOnInit(): void {}
}
