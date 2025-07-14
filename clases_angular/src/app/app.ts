import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoDispositivos } from './listado-dispositivos/listado-dispositivos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListadoDispositivos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'clases_angular';
}
