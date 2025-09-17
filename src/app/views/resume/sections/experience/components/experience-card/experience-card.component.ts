import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightPipe } from '@pipes/highlight.pipe';
import { LocalizedDatePipe } from '@app/pipes/localized-date.pipe';

import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'experience-card',
  standalone: true,
  imports: [CommonModule, HighlightPipe, LocalizedDatePipe, TranslatePipe],
  templateUrl: './experience-card.component.html',
  styles: ``,
})
export class ExperienceCardComponent {
  @Input({ required: true }) position: string = '';
  @Input({ required: true }) company: string = '';
  @Input({ required: true }) initDate!: Date;
  @Input() endDate!: Date;
  @Input({ required: true }) functions: {
    description: string;
    highlightedWords: string[];
    icon: string;
  }[] = [];
}
