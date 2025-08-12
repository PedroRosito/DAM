import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'listado-dispositivos',
    loadComponent: () => import('./listado-dispositivos/listado-dispositivos.page').then( m => m.ListadoDispositivosPage),
    canActivate: [authGuard]
  },
  {
    path: 'listado-dispositivos/:id',
    loadComponent: () => import('./listado-dispositivos/listado-dispositivos.page').then( m => m.ListadoDispositivosPage),
    canActivate: [authGuard]
  }
];
