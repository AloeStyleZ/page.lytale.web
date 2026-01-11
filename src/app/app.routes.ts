import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    title: 'Lytale - Chronicles of Blood and Ice'
  },
  {
    path: 'news',
    loadComponent: () => import('./pages/news/news').then(m => m.NewsComponent),
    title: 'News - Lytale'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent),
    title: 'About - Lytale'
  },
  {
    path: 'shop',
    loadComponent: () => import('./pages/shop/shop').then(m => m.ShopComponent),
    title: 'Shop - Lytale'
  },
  {
    path: 'history',
    loadComponent: () => import('./pages/history/history').then(m => m.HistoryComponent),
    title: 'History - Lytale'
  },
  {
    path: 'server',
    loadComponent: () => import('./pages/server/server').then(m => m.ServerComponent),
    title: 'Server - Lytale'
  },
  {
    path: 'events',
    loadComponent: () => import('./pages/events/events').then(m => m.EventsComponent),
    title: 'Events - Lytale'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];