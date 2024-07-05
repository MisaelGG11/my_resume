import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styles: `
    .underline-hover::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: white;
      transition: width 0.5s;
    }

    .underline-hover:hover::after {
      width: 100%;
    }`
})
export class ProjectsComponent {

}
