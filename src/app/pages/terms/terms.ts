import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './terms.html',
  styleUrl: './terms.css'
})
export class TermsComponent {
  lastUpdate: string = 'January 11, 2026';
  currentYear: number = new Date().getFullYear();
}