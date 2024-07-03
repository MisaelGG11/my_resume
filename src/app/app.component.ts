import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_resume';
  private meta = inject(Meta);

  constructor() {
    this.meta.addTag({ name: 'description', content: 'Misael Gómez, +2 años de experiencia. Ingeniero de Sistemas informáticos. Desarrollador Fullstack especializado en aplicaciones web.' });
  }
}
