import { Component } from '@angular/core';
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
export class HeroComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}