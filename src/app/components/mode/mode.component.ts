import { Component } from '@angular/core';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.scss'],
})
export class ModeComponent {
  mode: string = 'dark';
  toggleMode() {
    document.querySelector('html')?.classList.toggle('dark');

    this.mode = document.querySelector('html')?.classList.contains('dark')
      ? 'dark'
      : 'light';
  }
}
