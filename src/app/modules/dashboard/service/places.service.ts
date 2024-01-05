import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GetSearchResponse, Result } from '../models/get-search-response';
import { FormularioBusqueda } from '../components/nav-bar/nav-bar.component';

@Injectable()
export class PlacesService {
  public constructor(private http: HttpClient) {}

  public search(busqueda?: FormularioBusqueda): Observable<Result[]> {
    const params = this.generarQueryParams(busqueda);
    return this.http
      .get<GetSearchResponse>('https://api.foursquare.com/v3/places/search', {
        headers: {
          Authorization: 'fsq3bb4CEdP1usa9eVfZ/iMeOSGfc6Sx76yOg9zj4zP+pzc=',
        },
        params,
      })
      .pipe(map((response) => response.results));
  }

  private generarQueryParams(busqueda: FormularioBusqueda): HttpParams {
    let params = new HttpParams();

    for (const key in busqueda) {
      if (Object.prototype.hasOwnProperty.call(busqueda, key)) {
        const value = busqueda[key];

        if (value) {
          params = params.set(key, value);
        }
      }
    }

    return params;
  }
}
