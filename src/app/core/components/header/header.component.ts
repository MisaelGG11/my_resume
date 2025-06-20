import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'c-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  showMenu = false;

  handleShowMenu() {
  this.showMenu = !this.showMenu;
  }
}
