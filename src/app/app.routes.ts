import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    loadComponent: () =>
      import('./pages/characters-list/characters-list.component').then(
        (m) => m.CharactersListComponent
      ),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./pages/characters-detail/characters-detail.component').then(
        (m) => m.CharactersDetailComponent
      ),
  },
];
