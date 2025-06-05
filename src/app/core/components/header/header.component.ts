import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'c-header',
  standalone: true,
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
