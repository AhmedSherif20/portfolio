import { Component } from '@angular/core';
import { slideDownUp } from 'src/app/animation/animations';

@Component({
  selector: 'app-contact-methods',
  templateUrl: './contact-methods.component.html',
  styleUrls: ['./contact-methods.component.scss'],
  animations: [slideDownUp],
})
export class ContactMethodsComponent {}
