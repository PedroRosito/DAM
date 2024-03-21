import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.css'],
})
export class DispositivoComponent {

  constructor () {}

  @Input()
  dispositivo: any

  @Output()
  onChange = new EventEmitter()

  cambiarNombre () {
    this.dispositivo.name= "Nombre nuevo"
    this.onChange.emit(this.dispositivo.name)
  }
}
