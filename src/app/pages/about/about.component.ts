import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { slideDownUp } from 'src/app/animation/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [slideDownUp],
})
export class AboutComponent {
  techs: any[] = [
    {
      name: 'Structure Languages',
      lang: 'HTML, CSS, & SASS',
    },
    {
      name: 'Programming Languages',
      lang: 'JavaScript & TypeScript',
    },
    {
      name: 'UI Frameworks',
      lang: 'Bootstrap & Tailwind CSS',
    },
    {
      name: 'JavaScript Libraries',
      lang: 'jQuery & React',
    },
    {
      name: 'JavaScript Frameworks',
      lang: 'Angular',
    },
    {
      name: 'Version Control',
      lang: 'GIT',
    },
  ];
}
