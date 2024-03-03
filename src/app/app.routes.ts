import { Routes } from '@angular/router';
import { OverviewComponent } from './pages/user/overview/overview.component';

export const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./pages/user/detail/detail.component').then((c) => c.DetailComponent)
  }
];
