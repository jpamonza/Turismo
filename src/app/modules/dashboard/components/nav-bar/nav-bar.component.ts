import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { PlacesService } from '../../service/places.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

export interface FormularioBusqueda {
  query: string;
  radius: string;
  limit: string;
  sort: string;
}

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  @Output() public realizarBusqueda = new EventEmitter<FormularioBusqueda>();

  public formularioReactivo: FormGroup;
  public ordenarPorOpciones = [
    { label: '-- Ordenar por --', value: null },
    { label: 'Relevance', value: 'Relevance' },
    { label: 'Rating', value: 'Rating' },
    { label: 'Distance', value: 'Distance' },
    { label: 'Popularity', value: 'Popularity' },
  ];

  public constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formularioReactivo = this.fb.group(
      {
        query: [''],
        sort: [null],
        radius: ['', [Validators.min(100), Validators.max(100000)]],
        limit: ['', [Validators.min(1), Validators.max(50)]],
      },
      {
        validators: [this.validarCampos],
      }
    );
  }

  public nuevaBusqueda(formulario: FormularioBusqueda): void {
    console.log(formulario);
    this.realizarBusqueda.emit(formulario);
  }

  public establecerOrden(opcionOrden: string): void {
    this.formularioReactivo.get('sort').setValue(opcionOrden);
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  private validarCampos(formulario: FormGroup): ValidationErrors {
    const { value } = formulario;

    let valido = false;
    // revisamos que al menos uno de los campos en la busqueda tenga un valor
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        valido = valido || value[key];
      }
    }

    if (!valido) {
      return {
        vacio:
          'No se puede realizar la búsqueda, llene al menos uno de los campos',
      };
    }

    return null;
  }
}
