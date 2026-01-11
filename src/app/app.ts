import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle';
import { LanguageSelectorComponent } from './components/language-selector/language-selector';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    HeroComponent, 
    ThemeToggleComponent,
    LanguageSelectorComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'lytale-web';

  constructor(private translate: TranslateService) {
    // Configurar idiomas disponibles
    this.translate.addLangs(['en', 'es']);
    
    // Idioma por defecto
    this.translate.setDefaultLang('en');
    
    // Usar idioma guardado o el del navegador
    const savedLang = localStorage.getItem('language');
    const browserLang = this.translate.getBrowserLang();
    const langToUse = savedLang || (browserLang?.match(/en|es/) ? browserLang : 'en');
    this.translate.use(langToUse);
  }
}