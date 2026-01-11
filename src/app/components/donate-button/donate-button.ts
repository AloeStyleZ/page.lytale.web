import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-donate-button',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './donate-button.html',
  styleUrl: './donate-button.css'
})
export class DonateButtonComponent {
}