import { Component, effect, inject, signal } from '@angular/core';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { MainProject } from '@interfaces/projects.interface';
import { LangService } from '@app/services/lang.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'projects-section',
  standalone: true,
  imports: [TranslatePipe, ProjectCardComponent],
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
    }

    .horizontal-card {
      @apply col-span-1 md:col-span-2 flex flex-wrap w-full;
    }
  `,
})
export class ProjectsComponent {
  private translateService = inject(TranslateService);
  private langService = inject(LangService);

  lang = signal<string>('');

  mainProjects = signal<MainProject[]>([]);

  constructor() {

    this.langService.currentLang$.subscribe((lang) => {
      this.lang.set(lang);
    });

    effect(() => {
      if(this.lang()) {
        this.translateService
          .get('mainProjects.items')
          .subscribe((items: MainProject[]) => {
            const mainProjectsData = items.map((item, index) => ({
              id: Number(item.id ?? (index+1)),
              title: item.title,
              description: item.description,
              imageUrl: item.imageUrl || 'assets/images/no-image.png',
              repositoryUrl: item.repositoryUrl || undefined,
              technologies: item.technologies || [],
              liveDemoUrl: item.liveDemoUrl || undefined,
            }));
            this.mainProjects.set(mainProjectsData);
          });
      }
    });
  }
}
