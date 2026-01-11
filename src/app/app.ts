import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle';
import { LanguageSelectorComponent } from './components/language-selector/language-selector';
import { DonateButtonComponent } from './components/donate-button/donate-button';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    HeroComponent, 
    ThemeToggleComponent,
    LanguageSelectorComponent,
    DonateButtonComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'lytale-web';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    
    const savedLang = localStorage.getItem('language');
    const browserLang = this.translate.getBrowserLang();
    const langToUse = savedLang || (browserLang?.match(/en|es/) ? browserLang : 'en');
    this.translate.use(langToUse);
  }
}