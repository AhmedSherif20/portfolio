import { Component, HostListener, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

interface Link {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(evt: KeyboardEvent) {
    this.mobileNav = false;
  }

  logoPath: string = environment.logoUrl;
  scrollPosition: number = 0;
  mobileNav: boolean = false;

  @HostListener('window:scroll', ['$event'])
  windowScroll(): void {
    this.scrollPosition = window.scrollY;
  }

  navLinks: Link[] = [
    {
      path: 'home',
      label: 'home',
      icon: 'fa-solid fa-house',
    },
    {
      path: 'about',
      label: 'about',
      icon: 'fa-solid fa-circle-info',
    },
    {
      path: 'services',
      label: 'Services',
      icon: 'fa-solid fa-globe',
    },
    {
      path: 'portfolio',
      label: 'Portfolio',
      icon: 'fas fa-border-none',
    },
    {
      path: 'contact',
      label: 'contact',
      icon: 'fa-solid fa-phone',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
