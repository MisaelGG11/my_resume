import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  private _currentLang$ = new BehaviorSubject<string>(this.getSavedLang());

  constructor(
    private translateService: TranslateService,
    private cookieService: CookieService
  ) {
    const savedLang = this._currentLang$.value;
    this.translateService.use(savedLang);
  }

  get currentLang$() {
    return this._currentLang$.asObservable();
  }

  switchLang(lang: string) {
    this.translateService.use(lang);
    this.cookieService.set('lang', lang, 365, '/');
    this._currentLang$.next(lang);
  }

  private getSavedLang(): string {
    return this.cookieService.get('lang') || 'es';
  }
}
