import { Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';

export const mapsRoutes: Routes = [
  {
    path: '',
    component: MapComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
