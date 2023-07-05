import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ListadoDispositivoService } from '../services/listado-dispositivo.service';
import { Dispositivo } from '../interfaces/dispositivo';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  constructor(
    private loggerService: LoggerService,
    private listadoDispositivoService: ListadoDispositivoService
  ) {}

  texto: string = 'Hola mundo Angular'
  buttonState: boolean = false
  numeroTarjeta: string = ''
  number: number = 2

  listado: Dispositivo[] = this.listadoDispositivoService.getListadoDispositivos()

  changeState (string: string) {
    this.buttonState = !this.buttonState
    this.loggerService.logWarning(string)
    this.loggerService.log(this.listadoDispositivoService.getListadoDispositivos())
  }
}
