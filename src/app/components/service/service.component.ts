import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  @Input() icon: string = 'fa-solid fa-font-awesome';
  @Input() title: string = 'Title';
  @Input() description: string = 'Description';

  constructor() {}

  ngOnInit(): void {}
}
