import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styles: ``
})
export class HeaderComponent {
  showMenu = false;

  handleShowMenu() {
  this.showMenu = !this.showMenu;
  }
}
