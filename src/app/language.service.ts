import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang: 'fr' | 'en' = 'fr';

  constructor() {
    const saved = localStorage.getItem('lang');
    if (saved === 'fr' || saved === 'en') {
      this.currentLang = saved;
    } else {
      const browserLang = navigator.language || '';
      if (browserLang.startsWith('en')) {
        this.currentLang = 'en';
      }
    }
  }

  get isFr(): boolean {
    return this.currentLang === 'fr';
  }

  get isEn(): boolean {
    return this.currentLang === 'en';
  }

  setLang(lang: 'fr' | 'en'): void {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  toggleLang(): void {
    this.setLang(this.isFr ? 'en' : 'fr');
  }
}
