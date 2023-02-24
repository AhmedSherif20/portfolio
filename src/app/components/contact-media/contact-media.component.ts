import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-media',
  templateUrl: './contact-media.component.html',
  styleUrls: ['./contact-media.component.scss'],
})
export class ContactMediaComponent {
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
      name: `whatsApp`,
      link: ' https://wa.me/1222353412',
      icon: 'fa-whatsapp',
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/ahmedsherifin/',
      icon: 'fa-linkedin-in',
    },
  ];
}
