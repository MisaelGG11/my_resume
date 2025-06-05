import { Component } from '@angular/core';

import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';

// Sections for portfolio
import { PresentationComponent } from '@resume/sections/presentation/presentation.component';
import { ExperienceComponent } from '@resume/sections/experience/experience.component';
import { ProjectsComponent } from '@resume/sections/projects/projects.component';
import { StackComponent } from '@resume/sections/stack/stack.component';

@Component({
  selector: 'resume-page',
  standalone: true,
  imports: [
    HeaderComponent,
    PresentationComponent,
    ExperienceComponent,
    ProjectsComponent,
    StackComponent,
    FooterComponent,
  ],
  templateUrl: './resume.component.html',
  styles: `
    .custom-gradient {
      background: radial-gradient(at top, rgb(12, 45, 97) 0%, rgb(10, 36, 79) 10%,  rgb(11, 16, 56) 30%, rgb(3, 8, 30) 65%);
    }
  `,
})
export class ResumeComponent {}
