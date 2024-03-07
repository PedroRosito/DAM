import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ListadoDispositivosService } from '../services/listado-dispositivos.service';
import { Dispositivo } from '../interfaces/dispositivo';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  constructor (private loggerService: LoggerService,
               private listadoDispositivosService: ListadoDispositivosService) {}

  texto: string = 'Hola mundo!'
  numeroTarjeta: string = ''
  buttonState: boolean = true
  number: number = 2

  listado: Dispositivo[] = this.listadoDispositivosService.getListadoDispositivos()

  changeState (string: string) {
    this.buttonState = !this.buttonState
    this.loggerService.logWarning(string)
    this.loggerService.logError('Hubo un error')
  }
}
