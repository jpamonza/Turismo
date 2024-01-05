import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-imagen-mapa',
  standalone: true,
  imports: [],
  templateUrl: './imagen-mapa.component.html',
  styleUrl: './imagen-mapa.component.css',
})
export class ImagenMapaComponent implements AfterViewInit {
  @Input() public lngLat: [number, number];
  @ViewChild('mapa') public mapaElement: ElementRef<HTMLDivElement>;

  public ngAfterViewInit(): void {
    const mapa = new mapboxgl.Map({
      container: this.mapaElement.nativeElement,
      accessToken:
        'pk.eyJ1IjoianBhbW9uemEiLCJhIjoiY2tybzZzMzVqMDhmeTJ2cGduN2FkMDdyaCJ9.c8C1EeyHZfQWPl-GVV2-XQ',
      zoom: 15,
      maxZoom: 20,
      minZoom: 2,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      interactive: false,
    });

    const marker = new mapboxgl.Marker().setLngLat(this.lngLat).addTo(mapa);
  }
}
