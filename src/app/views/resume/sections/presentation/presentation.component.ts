import { Component, signal } from '@angular/core';
import { HighlightPipe } from '@pipes/highlight.pipe';

@Component({
  selector: 'presentation-section',
  standalone: true,
  imports: [HighlightPipe],
  templateUrl: './presentation.component.html',
  styles: ``,
})
export class PresentationComponent {
  showCV() {
    window.open('assets/docs/Hoja de Vida CV - Misael Gómez.pdf', '_blank');
  }

  description = signal<string>(
    `
      👨‍💻 +2 años de experiencia. Ingeniero de Sistemas informáticos. Desarrollador Fullstack especializado
      en aplicaciones web. 🚀 Apasionado por crear soluciones innovadoras y eficientes. 🛠️ Experto en
      tecnologías modernas y en la implementación de buenas prácticas de desarrollo.
    `
  );

  highlightedWords = signal<string[]>([
    '+2 años de experiencia',
    'Apasionado por crear soluciones innovadoras y eficientes.',
    'tecnologías modernas'
  ]);
}
