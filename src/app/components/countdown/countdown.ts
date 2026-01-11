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
  isCountdownFinished: boolean = false;
  
  private targetDate!: Date;
  private intervalId: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) {
    this.translate.onLangChange.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

ngOnInit() {

  this.targetDate = new Date(Date.UTC(2026, 0, 13, 23, 0, 0));


  this.updateCountdown();

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
      this.isCountdownFinished = true;
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      clearInterval(this.intervalId);
      this.cdr.detectChanges();
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    this.cdr.markForCheck();
  }
}