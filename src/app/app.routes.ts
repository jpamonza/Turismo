import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.routes').then(
        (m) => m.dashboardRoutes
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'maps',
    loadChildren: () =>
      import('./modules/maps/maps.routes').then((m) => m.mapsRoutes),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
