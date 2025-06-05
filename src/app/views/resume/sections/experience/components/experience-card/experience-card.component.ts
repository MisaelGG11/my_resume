import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightPipe } from '@pipes/highlight.pipe';

@Component({
  selector: 'experience-card',
  standalone: true,
  imports: [CommonModule, HighlightPipe],
  templateUrl: './experience-card.component.html',
  styles: ``,
})
export class ExperienceCardComponent {
  @Input({ required: true }) position: string = '';
  @Input({ required: true }) company: string = '';
  @Input({ required: true }) fechaInicio!: Date;
  @Input() fechaFin!: Date;
  @Input({ required: true }) functions: {
    description: string;
    highlightedWords: string[];
    icon: string;
  }[] = [];
}
