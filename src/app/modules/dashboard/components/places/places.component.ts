import { AfterViewInit, Component } from '@angular/core';
import { PlacesService } from '../../service/places.service';
import { Observable } from 'rxjs';
import { GetSearchResponse } from '../../models/get-search-response';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  templateUrl: './places.component.html',
  styleUrl: './places.component.css',
})
export class PlacesComponent implements AfterViewInit {
  public places$: Observable<GetSearchResponse> = null;

  public constructor(private placesService: PlacesService) {}

  ngAfterViewInit(): void {
    this.places$ = this.placesService.search();
  }
}
