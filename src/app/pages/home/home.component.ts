import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  jobTitles: string[] = [
    'computer Engineer.',
    'software  Engineer.',
    'frontend developer.',
    'angular developer.',
    'backend developer.',
    'nodejs developer.',
    'fullstack developer.',
    'MEAN stack developer.',
    'freelancer.',
  ];
}
