import { Component } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private sideNavService: SidenavService) {}

  toggleSideNav() {
    let result: boolean = this.sideNavService.sidenavBS.getValue();

    this.sideNavService.sidenavBS.next(!result);
  }
}
