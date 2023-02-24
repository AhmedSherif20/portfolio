import { Component } from '@angular/core';
import { NavLink } from 'src/app/models/nav link';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss'],
})
export class NavLinksComponent {
  links: NavLink[] = [
    {
      icon: 'fa-solid fa-house-chimney',
      label: 'home',
      path: '/home',
    },
    {
      icon: 'fa-regular fa-address-card',
      label: 'about me',
      path: '/about',
    },
    {
      icon: 'fa-solid fa-sliders',
      label: 'services',
      path: '/services',
    },
    {
      icon: 'fa-solid fa-award',
      label: 'resume',
      path: '/resume',
    },
    {
      icon: 'fa-solid fa-briefcase',
      label: 'portfolio',
      path: '/portfolio',
    },
    {
      icon: 'fa-solid fa-phone-volume',
      label: 'contact',
      path: '/contact',
    },
  ];

  constructor(private sideNavService: SidenavService) {}

  closeNav(): void {
    this.sideNavService.sidenavBS.next(false);
  }
}
