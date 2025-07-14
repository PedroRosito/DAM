import { Component, output, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DispositivoInterface } from '../interfaces/dispositivo';

@Component({
  selector: 'app-dispositivo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dispositivo.component.html',
  styleUrl: './dispositivo.component.css'
})
export class DispositivoComponent {
  @Input()
  dispositivo: DispositivoInterface = {
    id: 0,
    location: '',
    name: ''
  }

  onChange = output<any>()

  changeLocation () {
    this.dispositivo.location = 'Nueva ubicación'
    this.onChange.emit(this.dispositivo.location)
  }
}
