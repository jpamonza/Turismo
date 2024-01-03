import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetSearchResponse } from '../models/get-search-response';

@Injectable()
export class PlacesService {
  public constructor(private http: HttpClient) {}

  public search(busqueda?: string): Observable<GetSearchResponse> {
    return this.http.get<GetSearchResponse>('https://api.foursquare.com/v3/places/search', {
      headers: {
        Authorization: 'fsq3bb4CEdP1usa9eVfZ/iMeOSGfc6Sx76yOg9zj4zP+pzc=',
      },
    });
  }
}
