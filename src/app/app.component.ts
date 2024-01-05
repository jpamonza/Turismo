import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PlacesComponent } from './modules/dashboard/components/places/places.component';
import { FormularioBusqueda, NavBarComponent } from './modules/dashboard/components/nav-bar/nav-bar.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { MapComponent } from './modules/maps/components/map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PlacesComponent, NavBarComponent, LoginComponent, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild("places") public placesElement: PlacesComponent;
  title = 'Turismo';

  public actualizarResultados(busqueda: FormularioBusqueda): void {
    this.placesElement.actualizarResultados(busqueda);
  }
}
