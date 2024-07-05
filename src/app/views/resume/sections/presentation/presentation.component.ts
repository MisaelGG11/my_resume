import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [],
  templateUrl: './presentation.component.html',
  styles: ``
})
export class PresentationComponent {
  showCV() {
    window.open('assets/docs/Hoja de Vida CV - Misael Gómez.pdf', '_blank');
  }
}
