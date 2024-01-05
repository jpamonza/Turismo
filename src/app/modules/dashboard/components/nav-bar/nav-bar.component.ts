import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { PlacesService } from '../../service/places.service';

export interface FormularioBusqueda {
  query: string;
  radius: string;
  limit: string;
}

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  @Output() public realizarBusqueda = new EventEmitter<FormularioBusqueda>();

  public constructor() {}

  public nuevaBusqueda(formulario: FormularioBusqueda): void {
    console.log(formulario);
    if (this.esFormularioValido(formulario)) {
      this.realizarBusqueda.emit(formulario);
    }
  }

  private esFormularioValido(formulario: FormularioBusqueda): boolean {
    return true;
  }
}

