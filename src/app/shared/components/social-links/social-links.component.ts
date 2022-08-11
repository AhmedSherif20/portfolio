import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent implements OnInit {
  @Input() linksShape: string = 'lines';

  mediaLinks: any = [
    {
      icon: 'fa-brands fa-facebook-f',
      link: 'https://www.facebook.com/AhmedSherifFB/',
    },
    {
      icon: 'fa-brands fa-instagram',
      link: 'https://www.instagram.com/ahmed.sherif.official/',
    },
    {
      icon: 'fa-brands fa-linkedin-in',
      link: 'https://www.linkedin.com/in/ahmedsherifin/',
    },
    {
      icon: 'fa-brands fa-google',
      link: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvrcjxnSNtkSDvcgcScgCtBpMQbhBJvpMkkLsDxJkQfQBqcBQqGtDDJzzlxMTCQBCHxLsB',
    },
    {
      icon: 'fa-brands fa-github',
      link: 'https://github.com/AhmedSherif20',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
