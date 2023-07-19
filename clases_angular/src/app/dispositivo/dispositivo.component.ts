import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.css']
})
export class DispositivoComponent {

  constructor () {}

  @Input() dispositivo: any
  @Output() onChange = new EventEmitter()

  cambiarNombre () {
    this.dispositivo.name = 'Nuevo nombre'
    this.onChange.emit(`El nuevo nombre es: ${this.dispositivo.name}`)
  }
}
