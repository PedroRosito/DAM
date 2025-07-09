import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DispositivoComponent } from './dispositivo/dispositivo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DispositivoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'clases_angular';
}
