import { Injectable } from '@angular/core';
import { DispositivoInterface } from '../interfaces/dispositivo';

@Injectable({
  providedIn: 'root'
})
export class Dispositivo {

  constructor() { }

  getDispositivos (): DispositivoInterface[] {
    return [
      {
        id: 1,
        location: 'Patio',
        name: 'Lámpara'
      },
      {
        id: 2,
        location: 'Cocina',
        name: 'Lámpara 2'
      }
    ]
  }

}
