import {
  OnInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { PlacesService } from '../../service/places.service';
import { Observable } from 'rxjs';
import { GetSearchResponse, Result } from '../../models/get-search-response';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ImagenMapaComponent } from '../imagen-mapa/imagen-mapa.component';
import { FormularioBusqueda } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, ImagenMapaComponent],
  templateUrl: './places.component.html',
  styleUrl: './places.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacesComponent implements OnInit {
  public places$: Observable<Result[]> = null;

  public constructor(private placesService: PlacesService) {}

  ngOnInit(): void {
    this.places$ = this.placesService.search();
  }

  public actualizarResultados(busqueda: FormularioBusqueda): void {
    this.places$ = this.placesService.search(busqueda);
  }
}
