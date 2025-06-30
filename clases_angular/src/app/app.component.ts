import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DispositivoComponent } from './dispositivo/dispositivo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DispositivoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clases';
}
