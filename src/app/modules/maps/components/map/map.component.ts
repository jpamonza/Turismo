import { AfterViewInit, Component } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    const mapa = new mapboxgl.Map({
      container: 'mapa',
      accessToken:
        'pk.eyJ1IjoianBhbW9uemEiLCJhIjoiY2tybzZzMzVqMDhmeTJ2cGduN2FkMDdyaCJ9.c8C1EeyHZfQWPl-GVV2-XQ',
      zoom: 10,
      maxZoom: 20,
      minZoom: 5,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-66.152404, -17.377997],
    });

    new mapboxgl.Marker()
      .setLngLat([-66.152404, -17.377997])
      .addTo(mapa);
    // const map = new mapboxgl.Map({
    //   container: 'mapa',
    //   // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    //   style: 'mapbox://styles/mapbox/streets-v12',
    //   center: [12.550343, 55.665957],
    //   zoom: 8,
    //   accessToken:
    //     'pk.eyJ1IjoianBhbW9uemEiLCJhIjoiY2tybzZzMzVqMDhmeTJ2cGduN2FkMDdyaCJ9.c8C1EeyHZfQWPl-GVV2-XQ',
    // });

    // // Create a default Marker and add it to the map.
    // const marker1 = new mapboxgl.Marker()
    //   .setLngLat([12.554729, 55.70651])
    //   .addTo(map);

    // // Create a default Marker, colored black, rotated 45 degrees.
    // const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
    //   .setLngLat([12.65147, 55.608166])
    //   .addTo(map);
  }
}
