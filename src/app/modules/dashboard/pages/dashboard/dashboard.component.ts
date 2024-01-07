import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormularioBusqueda, NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { PlacesComponent } from '../../components/places/places.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, PlacesComponent, NavBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  @ViewChild("places") public placesElement: PlacesComponent;

  public actualizarResultados(busqueda: FormularioBusqueda): void {
    this.placesElement.actualizarResultados(busqueda);
  }
}
