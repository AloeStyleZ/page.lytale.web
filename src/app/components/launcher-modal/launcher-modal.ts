import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-launcher-modal',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './launcher-modal.html',
  styleUrl: './launcher-modal.css'
})
export class LauncherModalComponent {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  copiedIP = false;
  serverIP = 'play.lytale.com'; // Cambia esto por tu IP real

  close() {
    this.closeModal.emit();
  }

  copyIP() {
    navigator.clipboard.writeText(this.serverIP).then(() => {
      this.copiedIP = true;
      setTimeout(() => {
        this.copiedIP = false;
      }, 2000);
    });
  }
}