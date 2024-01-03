import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  public busqueda = 'texto';

  public mostrarValorBusqueda(): void {
    console.log(this.busqueda);
  }
}
