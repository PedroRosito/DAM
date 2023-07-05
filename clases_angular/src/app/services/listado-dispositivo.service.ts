import { Injectable } from '@angular/core';
import { Dispositivo } from '../interfaces/dispositivo';

@Injectable({
  providedIn: 'root'
})
export class ListadoDispositivoService {

  listado: Dispositivo[] = [
    {
      id: 1,
      name: 'Sensor 1',
      location: 'Patio',
    },
    {
      id: 2,
      name: 'Sensor 2',
      location: 'Cocina',
    },
    {
      id: 3,
      name: 'Sensor 3',
      location: 'Patio',
    },
    {
      id: 4,
      name: 'Sensor 4',
      location: 'Garage',
    }
  ]

  getListadoDispositivos(): Dispositivo[] {
    return this.listado
  }

  constructor() { }
}
