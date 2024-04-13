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
    path: 'detail',
    loadComponent: () =>
      import('./pages/characters-detail/characters-detail.component').then(
        (m) => m.CharactersDetailComponent
      ),
  },
  {
    path: '',
    redirectTo: "list",
    pathMatch: "full",
  },
  {
    path: '**',
    redirectTo: "list",
    pathMatch: "full",
  },
];
