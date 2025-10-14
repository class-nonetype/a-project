import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import ('./gifs/pages/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: 'search',
        loadComponent: () => import ('./gifs/pages/search-page/search-page.component'),
      },

      {
        path: 'trending',
        loadComponent: () => import ('./gifs/pages/trending-page/trending-page.component'),
      },

    ]
  },


  {
    path: 'settings',
    loadComponent: () => import ('./gifs/pages/settings-page/settings-page.component'),
  },

  {
    path: '',
    loadComponent: () => import ('./gifs/pages/home-page/home-page.component'),
  },

  {
    path: '**',
    redirectTo: ''
  },

];
