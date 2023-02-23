import { Component } from '@angular/core';
import { SidenavService } from './services/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-portofolio';

  sideNavOpen: boolean = false;
  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {
    this.sidenavService.sidenavBS.subscribe((res) => {
      this.sideNavOpen = res;
    });
  }

  label: string = 'light';

  test(): void {
    document.querySelector('html')?.classList.toggle('dark');
    if (document.querySelector('html')?.classList.contains('dark')) {
      this.label = 'light';
    } else {
      this.label = 'dark';
    }
  }
}
