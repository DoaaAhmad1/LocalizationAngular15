import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MyTranslateService {
currentLang: string;

  constructor(private translate: TranslateService) {
    this.initiateLang();
  }
  initiateLang() {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    localStorage.getItem('lang') == null && localStorage.setItem('lang', 'en');
    this. currentLang = localStorage.getItem('lang') || 'en';
    this.translate.use(this.currentLang);
  }
  setLang(language: string) {
    localStorage.setItem('lang', language);
    this.translate.use(language);

  }
}
