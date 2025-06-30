import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dispositivo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dispositivo.component.html',
  styleUrl: './dispositivo.component.css'
})
export class DispositivoComponent {

  buttonState: boolean
  buttonText: string

  constructor () {
    this.buttonState = false
    this.buttonText = 'Habilitado'
  }

  changeButtonState () {
    this.buttonState = !this.buttonState
    this.buttonText = 'Deshabilitado'
  }
}
