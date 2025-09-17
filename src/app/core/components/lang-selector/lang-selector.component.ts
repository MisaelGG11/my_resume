import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';

import { LangService } from '@app/services/lang.service';

import { LanguageOption } from '@interfaces/lang.interfaces';

@Component({
  selector: 'lang-selector',
  imports: [CommonModule],
  templateUrl: './lang-selector.component.html',
  styles: ``,
  host: {
    class: 'relative language-selector',
    '[class]': 'class',
  },
})
export class LangSelectorComponent implements OnInit {
  @Input() class: string = '';

  private langService = inject(LangService);

  selectedLanguage = signal<string | null>('en');
  isLanguageDropdownOpen = signal<boolean>(false);

  toggleLanguageDropdown(): void {
    this.isLanguageDropdownOpen.set(!this.isLanguageDropdownOpen());
  }

  languageOptions = signal<LanguageOption[]>([
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ]);

  ngOnInit(): void {
    this.langService.currentLang$.subscribe((lang) => {
      this.changeLanguage(lang);
    });

    // Close the language dropdown when clicking outside of it
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-selector')) {
        this.isLanguageDropdownOpen.set(false);
      }
    });
  }

  changeLanguage(value: string) {
    if (this.selectedLanguage() === value) {
      this.isLanguageDropdownOpen.set(false);
      return; // No need to change if the same language is selected
    }
    this.langService.switchLang(value);
    this.selectedLanguage.set(value);
    this.isLanguageDropdownOpen.set(false);
  }

  getCurrentLanguageData() {
    return this.languageOptions().find(
      (lang) => lang.code === this.selectedLanguage()
    );
  }
}
