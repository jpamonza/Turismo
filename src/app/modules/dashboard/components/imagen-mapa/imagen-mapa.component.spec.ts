import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenMapaComponent } from './imagen-mapa.component';

describe('ImagenMapaComponent', () => {
  let component: ImagenMapaComponent;
  let fixture: ComponentFixture<ImagenMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenMapaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagenMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
