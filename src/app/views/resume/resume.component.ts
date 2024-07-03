import { Component } from '@angular/core';
import { PresentationComponent } from './sections/presentation/presentation.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { StackComponent } from './sections/stack/stack.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    PresentationComponent,
    ExperienceComponent,
    StackComponent
  ],
  templateUrl: './resume.component.html',
  styles: `
    .custom-gradient {
      background: radial-gradient(at top, rgb(12, 45, 97) 0%, rgb(10, 36, 79) 10%,  rgb(11, 16, 56) 30%, rgb(3, 8, 30) 65%);
    }
  `
})
export class ResumeComponent {

}
