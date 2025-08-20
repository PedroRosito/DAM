import { Component, output, Input, input, effect, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DispositivoInterface } from '../interfaces/dispositivo';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dispositivo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dispositivo.component.html',
  styleUrl: './dispositivo.component.css'
})
export class DispositivoComponent {
  // @Input()
  // dispositivo: DispositivoInterface = {
  //   id: 0,
  //   location: '',
  //   name: ''
  // }
  counter$ = interval(1000);
  counter = toSignal(this.counter$, { initialValue: 0 })

  dispositivo = input<DispositivoInterface>()

  onChange = output<any>()

  changeLocation () {
    this.onChange.emit(this.dispositivo())
  }

  constructor () {
    effect(() => {
      console.log(`Counter value: ${this.counter()}`)
    })
  }
}
