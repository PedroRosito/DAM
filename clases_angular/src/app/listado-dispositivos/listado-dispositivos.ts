import { Component, inject, OnInit } from '@angular/core';
import { Dispositivo } from '../services/dispositivo';
import { DispositivoInterface } from '../interfaces/dispositivo';
import { DispositivoComponent } from '../dispositivo/dispositivo.component';

@Component({
  selector: 'app-listado-dispositivos',
  standalone: true,
  imports: [DispositivoComponent],
  templateUrl: './listado-dispositivos.html',
  styleUrl: './listado-dispositivos.css'
})
export class ListadoDispositivos implements OnInit {

  ngOnInit(): void {
      
  }

  dispositivos: DispositivoInterface[]
  serviceDispositivo: Dispositivo

  constructor () {
    this.serviceDispositivo = inject(Dispositivo)
    this.dispositivos = []
  }

  getDispositivos () {
    this.dispositivos = this.serviceDispositivo.getDispositivos()
    console.log(this.dispositivos)
  }

  manejador (eventData: any) {
    console.log(eventData)
  }
}
