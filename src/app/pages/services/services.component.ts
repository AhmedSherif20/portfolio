import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { slideDownUp } from 'src/app/animation/animations';

interface Service {
  icon: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [slideDownUp],
})
export default class ServicesComponent implements OnInit {
  services: Service[] = [];

  ngOnInit(): void {
    this.services = [
      {
        icon: 'fa-solid fa-display',
        name: `UI/UX Development`,
        description: `Convert Figma / XD / PSD / Sketch to HTML/CSS, with responsive design and clean code following best practices`,
      },
      {
        icon: 'fa-solid fa-code',
        name: `Web Development`,
        description: `developing highly interactive web applications utilizing Angular, React, Vue and NodeJs`,
      },
      {
        icon: 'fa-solid fa-handshake',
        name: 'Technical Consultations',
        description: `Talk about your demands and needs to get the best modern solution to improve your business`,
      },
      {
        icon: `fa-solid fa-bug`,
        name: `Issues and Bugs Solving`,
        description: `handle issues and bugs in a professional manner, try to find out why that happens, and try to get the problem best solution with lowest cost`,
      },
    ];
  }

  // create function to concat first name and last name
}
