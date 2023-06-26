import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  texto: string = 'Hola mundo Angular'
  buttonState: boolean = false
  numeroTarjeta: string = ''

  changeState (string: string) {
    this.buttonState = !this.buttonState
    console.log(string)
  }
}
