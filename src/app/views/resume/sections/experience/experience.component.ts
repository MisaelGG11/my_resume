import { Component, effect, inject, signal } from '@angular/core';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { Experience } from '../../../../interfaces/experience.interfaces';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from '@app/services/lang.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'experience-section',
  standalone: true,
  imports: [TranslatePipe, ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styles: ``,
})
export class ExperienceComponent {
  private translateService = inject(TranslateService);
  private langService = inject(LangService);

  lang = signal<string>('');

  experience = signal<Experience[]>([]);

  constructor() {

    this.langService.currentLang$.subscribe((lang) => {
      this.lang.set(lang);
    });

    effect(() => {
      if(this.lang()) {
        this.translateService
          .get('experience.items')
          .subscribe((items: Experience[]) => {
            const experienceData = items.map((item) => ({
              position: item.position,
              company: item.company,
              initDate: new Date(item.initDate),
              endDate: item.endDate ? new Date(item.endDate) : undefined,
              functions: item.functions.map((func) => ({
                description: func.description,
                highlightedWords: func.highlightedWords || [],
                icon: func.icon || 'default-icon', // Provide a default icon if none is specified
              }))
            }));
            this.experience.set(experienceData);
          });
      }
    });
  }
}
