import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styles: ``,
  host: {
    class: 'rounded-xl bg-[#090c2f] shadow-lg shadow-[#FFFFFF08] transition duration-300 ease-in-out transform hover:scale-[1.03] hover:border border-sky-500/50 overflow-hidden',
    '[class.horizontal-card]': 'this.id === 3'
  }
})
export class ProjectCardComponent {
  @Input({ required: true }) id!: number; // Unique identifier for the project
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) imageUrl!: string;
  @Input() repositoryUrl?: string; // Optional, can be null if no Git repository / Private repository
  @Input() liveDemoUrl?: string; // Optional, for projects that have a live demo
  @Input({ required: true }) technologies!: string[];
}
