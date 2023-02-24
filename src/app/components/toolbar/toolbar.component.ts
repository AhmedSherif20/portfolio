import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  navState: boolean = false;
  constructor(private sideNavService: SidenavService) {}

  ngOnInit(): void {
    this.sideNavService.sidenavBS.subscribe((res) => {
      if (typeof res === 'boolean') {
        this.navState = res;
      }
    });
  }

  toggleSideNav() {
    let result: boolean = this.sideNavService.sidenavBS.getValue();

    this.sideNavService.sidenavBS.next(!result);
  }
}
