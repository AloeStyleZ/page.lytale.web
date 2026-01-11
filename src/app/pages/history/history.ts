import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

// Pipe para sanitizar URLs de YouTube
@Pipe({
  name: 'safe',
  standalone: true
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  
  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

interface Chapter {
  id: number;
  seasonId: number;
  episode: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  releaseDate: string;
}

interface Season {
  id: number;
  name: string;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, TranslateModule, SafePipe],
  templateUrl: './history.html',
  styleUrl: './history.css'
})
export class HistoryComponent {
  selectedSeasonId: number = 1;
  selectedChapter: Chapter | null = null;

  seasons: Season[] = [
    { id: 1, name: 'Acto I: El Rescate' },
    { id: 2, name: 'Acto II: La Rebelión' },
    { id: 3, name: 'Acto III: La Guerra' }
  ];

  chapters: Chapter[] = [
    // Acto I
    {
      id: 1,
      seasonId: 1,
      episode: 1,
      title: 'La Prisión Acorazada',
      description: 'Adan Kranis permanece prisionero en las profundidades de la Prisión Acorazada Imperial. 22 soldados de la Alianza preparan una operación suicida para rescatarlo.',
      thumbnail: 'https://bucket.lytale.com/thumbnails/ep1.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '12:45',
      releaseDate: 'Enero 2026'
    },
    {
      id: 2,
      seasonId: 1,
      episode: 2,
      title: 'El Desertor',
      description: 'Ludwig Mints, un joven soldado imperial, escapa accidentalmente durante el caos del rescate. Tres presos sacrifican sus vidas para protegerlo.',
      thumbnail: 'https://bucket.lytale.com/thumbnails/ep2.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '15:20',
      releaseDate: 'Enero 2026'
    },
    {
      id: 3,
      seasonId: 1,
      episode: 3,
      title: 'Símbolo de Resistencia',
      description: 'Adan es liberado pero descubre que todos quieren usar su nombre como símbolo. La Alianza lo necesita para mantener la moral.',
      thumbnail: 'https://bucket.lytale.com/thumbnails/ep3.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '18:30',
      releaseDate: 'Febrero 2026'
    },
    // Acto II
    {
      id: 4,
      seasonId: 2,
      episode: 1,
      title: 'El Gremio Neutral',
      description: 'Ludwig encuentra refugio en el Gremio de Mercaderes. Intenta ayudar a la Alianza por deuda moral, pero algo no encaja.',
      thumbnail: 'https://bucket.lytale.com/thumbnails/ep4.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '14:15',
      releaseDate: 'Febrero 2026'
    },
    {
      id: 5,
      seasonId: 2,
      episode: 2,
      title: 'La Verdad Oculta',
      description: 'Ludwig descubre documentos que revelan la corrupción de ambos bandos. Ni el Imperio ni la Alianza buscan realmente la paz.',
      thumbnail: 'https://bucket.lytale.com/thumbnails/ep5.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '16:45',
      releaseDate: 'Marzo 2026'
    },
    {
      id: 6,
      seasonId: 2,
      episode: 3,
      title: 'La Tercera Vía',
      description: 'Ludwig decide crear una rebelión que destruirá ambos sistemas. Comienza a reclutar desertores de ambos lados.',
      thumbnail: 'https://bucket.lytale.com/thumbnails/ep6.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '20:00',
      releaseDate: 'Marzo 2026'
    },
    // Acto III
    {
      id: 7,
      seasonId: 3,
      episode: 1,
      title: 'El Estratega',
      description: 'Rudeus Von Tenmak investiga el rescate. Su brillantez táctica le permite ver el tablero completo antes que nadie.',
      thumbnail: 'https://bucket.lytale.com/thumbnails/ep7.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '17:30',
      releaseDate: 'Abril 2026'
    },
    {
      id: 8,
      seasonId: 3,
      episode: 2,
      title: 'Reforma desde Dentro',
      description: 'Rudeus planea reformar el Imperio desde dentro, pero Ludwig podría destruir todo su plan al provocar una guerra total.',
      thumbnail: 'https://bucket.lytale.com/thumbnails/ep8.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '19:15',
      releaseDate: 'Abril 2026'
    },
    {
      id: 9,
      seasonId: 3,
      episode: 3,
      title: 'El Choque Inevitable',
      description: 'Tres hombres, tres visiones. Las piezas están en posición. La guerra que decidirá el futuro está por comenzar.',
      thumbnail: 'https://bucket.lytale.com/thumbnails/ep9.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '22:40',
      releaseDate: 'Mayo 2026'
    }
  ];

  constructor() {}

  selectSeason(seasonId: number) {
    this.selectedSeasonId = seasonId;
    this.selectedChapter = null;
  }

  getSelectedSeasonChapters(): Chapter[] {
    return this.chapters.filter(chapter => chapter.seasonId === this.selectedSeasonId);
  }

  selectChapter(chapter: Chapter) {
    this.selectedChapter = chapter;
  }

  closeVideo() {
    this.selectedChapter = null;
  }
}