import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { LauncherModalComponent } from '../launcher-modal/launcher-modal';
import { CountdownComponent } from '../countdown/countdown';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule, LauncherModalComponent, CountdownComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit {
  isModalOpen = false;

  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    // SEO
    this.title.setTitle('Lytale - Chronicles of Blood and Ice | Hytale RPG Survival Server');
    
    this.meta.updateTag({
      name: 'description',
      content: 'Join Lytale, an immersive Hytale RPG Survival server set in a world devastated by 67 years of war. Choose your faction: Empire, Alliance, or Rebellion. Shape the future.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'Lytale, Hytale, Hytale server, RPG server, survival server, Hytale factions, multiplayer Hytale, Hytale gameplay'
    });

    // Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: 'Lytale - Chronicles of Blood and Ice'
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Join the war. Choose your side. Shape the destiny of a world torn by 67 years of conflict.'
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}