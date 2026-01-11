import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.css'
})
export class LanguageSelectorComponent {
  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || this.translate.defaultLang || 'en';
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('language', lang);
  }
}