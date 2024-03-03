import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  texto: string = 'Hola mundo!'
  numeroTarjeta: string = ''
  buttonState: boolean = true

  changeState (string: string) {
    this.buttonState = !this.buttonState
    console.log(string)
  }
}
