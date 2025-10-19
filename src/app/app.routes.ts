import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/shell/shell.component').then((m) => m.ShellComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./gifs/pages/dashboard-page/dashboard-page.component').then((m) => m.default),
          },
          {
            path: 'search',
            loadComponent: () =>
              import('./gifs/pages/search-page/search-page.component').then((m) => m.default),
          },
          {
            path: 'trending',
            loadComponent: () =>
              import('./gifs/pages/trending-page/trending-page.component').then((m) => m.default),
          },
          {
            path: 'projects',
            loadComponent: () =>
              import('./gifs/pages/projects-page/projects-page.component').then((m) => m.default),
          },
        ],
      },
      {
        path: 'inbox',
        loadComponent: () =>
          import('./gifs/pages/inbox-page/inbox-page.component').then((m) => m.default),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./gifs/pages/profile-page/profile-page.component').then((m) => m.default),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./gifs/pages/settings-page/settings-page.component').then((m) => m.default),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
