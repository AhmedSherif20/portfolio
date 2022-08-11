import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  jobTitles: string[] = [
    'computer Engineer',
    'software  Engineer',
    'frontend developer',
    'angular developer',
    'freelancer',
  ];

  constructor() {}

  ngOnInit(): void {}
}
