import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

export interface MediaLink {
  labelKey: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-media-dropdown',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink, RouterLinkActive],
  templateUrl: './media-dropdown.html',
  styleUrl: './media-dropdown.css'
})
export class MediaDropdownComponent {
  @Input() label: string = 'MEDIA';
  @Input() position: 'left' | 'right' = 'left';

  mediaLinks: MediaLink[] = [
    {
      labelKey: 'media.history',
      url: '/history',
      icon: 'history_edu'
    },
    {
      labelKey: 'media.community',
      url: '/community',
      icon: 'groups'
    },
    {
      labelKey: 'media.events',
      url: '/events',
      icon: 'event'
    }
  ];
}