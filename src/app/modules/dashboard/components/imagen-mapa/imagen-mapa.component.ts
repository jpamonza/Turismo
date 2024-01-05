import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
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
export class ImagenMapaComponent implements AfterViewInit, OnDestroy {
  @Input() public lngLat: [number, number];
  @ViewChild('mapa') public mapaElement: ElementRef<HTMLDivElement>;

  private mapa: mapboxgl.Map;
  private marker: mapboxgl.Marker;

  public ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
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

    this.marker = new mapboxgl.Marker().setLngLat(this.lngLat).addTo(this.mapa);
  }

  public ngOnDestroy(): void {
    console.log('Imagen destruida');
    this.marker.remove();
    this.mapa.remove();
  }
}
