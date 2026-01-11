import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './countdown.html',
  styleUrl: './countdown.css'
})
export class CountdownComponent implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  
  private targetDate!: Date;
  private intervalId: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) {
    // Detectar cambios de idioma
    this.translate.onLangChange.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  ngOnInit() {
    // Establece la fecha objetivo (2 días y 20 horas desde ahora)
    this.targetDate = new Date();
    this.targetDate.setDate(this.targetDate.getDate() + 2); // +2 días
    this.targetDate.setHours(this.targetDate.getHours() + 20); // +20 horas
    
    // O puedes establecer una fecha específica:
    // this.targetDate = new Date('2026-01-15T00:00:00');
    
    this.updateCountdown();
    
    // Actualiza cada segundo
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance < 0) {
      // Countdown terminado
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      clearInterval(this.intervalId);
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Forzar detección de cambios
    this.cdr.markForCheck();
  }
}