import { Injectable } from '@angular/core';
import { Dispositivo } from '../interfaces/dispositivo';

@Injectable({
  providedIn: 'root'
})
export class ListadoDispositivosService {

  constructor() { }

  listado: Dispositivo[] = [
    {
      id: 1,
      name: 'Sensor 1',
      location: 'Patio',
    },
    {
      id: 2,
      name: 'Sensor 2',
      location: 'Techo',
    }
  ]

  getListadoDispositivos (): Dispositivo[] {
    return this.listado
  }
}
