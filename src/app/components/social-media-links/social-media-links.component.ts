import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.scss'],
})
export class SocialMediaLinksComponent {
  linksArr: any[] = [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/AhmedSherifFB/',
      icon: 'fa-facebook-f',
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/ahmed.sherif.official/',
      icon: 'fa-instagram',
    },
    {
      name: 'google',
      link: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvrcjxnSNtkSDvcgcScgCtBpMQbhBJvpMkkLsDxJkQfQBqcBQqGtDDJzzlxMTCQBCHxLsB',
      icon: 'fa-google',
    },
    {
      name: 'github',
      link: 'https://github.com/AhmedSherif20',
      icon: 'fa-github',
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/ahmedsherifin/',
      icon: 'fa-linkedin-in',
    },
  ];
}
