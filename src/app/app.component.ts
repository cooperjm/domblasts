import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'domblasts';
  sideNavOpen = false;

  @HostBinding('class.open') private get hostClass(): boolean {
    return this.sideNavOpen;
  }

  toggleSideNav() {
    this.sideNavOpen = !this.sideNavOpen;
    console.log('Toggle Side Nav', this.sideNavOpen);
  }
}
