import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './tooltip.component.html',
  styles: `
  .tooltip-content {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 0.5rem;
    padding: 0.25rem 0.5rem;
    color: #fff;
    text-align: center;
    border-radius: 0.25rem;
    opacity: 0;
    transition: opacity 0.3s;
    white-space: nowrap;
    z-index: 10;
  }

  .group:hover .tooltip-content {
    opacity: 1;
  }
  `
})
export class TooltipComponent {
  @Input() text: string = '';
  @Input() color: string = '#FFF';
}
