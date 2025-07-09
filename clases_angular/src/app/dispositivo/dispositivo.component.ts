import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Dispositivo } from '../services/dispositivo';
import { DispositivoInterface } from '../interfaces/dispositivo';
import { ElevarPipe } from '../pipes/elevar-pipe';
import { Colorear } from '../directives/colorear';

@Component({
  selector: 'app-dispositivo',
  standalone: true,
  imports: [FormsModule, ElevarPipe, Colorear],
  templateUrl: './dispositivo.component.html',
  styleUrl: './dispositivo.component.css'
})
export class DispositivoComponent {

  buttonState: boolean
  buttonText: string
  dispositivos: DispositivoInterface[]
  serviceDispositivo: Dispositivo
  number: number

  constructor () {
    this.buttonState = false
    this.buttonText = 'Habilitado'
    this.dispositivos = []
    this.serviceDispositivo = inject(Dispositivo)
    this.number = 3
  }

  changeButtonState () {
    this.buttonState = !this.buttonState
    this.buttonText = 'Deshabilitado'
  }

  getDispositivos () {
    this.dispositivos = this.serviceDispositivo.getDispositivos()
    console.log(this.dispositivos)
  }
}
