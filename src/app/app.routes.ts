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
    path: 'community',
    loadComponent: () => import('./pages/community/community').then(m => m.Community),
    title: 'Community - Lytale'
  },
  {
    path: 'events',
    loadComponent: () => import('./pages/events/events').then(m => m.EventsComponent),
    title: 'Events - Lytale'
  },
   {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms').then(m => m.TermsComponent),
    title: 'Terms and Conditions - Lytale'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];