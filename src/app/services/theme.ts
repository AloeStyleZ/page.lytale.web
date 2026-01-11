import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = true;

  constructor() {
    this.loadTheme();
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      this.darkMode = false;
      document.documentElement.classList.remove('dark');
    } else {
      this.darkMode = true;
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }
}