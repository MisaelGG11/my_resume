import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';

import { TranslateService } from "@ngx-translate/core";

import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my_resume';
  private meta = inject(Meta);
  private translateService = inject(TranslateService);
  private cookieService = inject(CookieService);

  constructor() {
    this.meta.addTag({
      name: 'description',
      content:
        'Misael Gómez, +2 años de experiencia. Ingeniero de Sistemas informáticos. Desarrollador Fullstack especializado en aplicaciones web.',
    });

    this.translateService.addLangs(['en', 'es']);

    const cookieLang = this.cookieService.get('lang');
    if (cookieLang) {
      this.translateService.use(cookieLang);
    }
    else {
      this.translateService.use('en');
      this.cookieService.set('lang', 'en', 365, '/');
    }
  }
}
