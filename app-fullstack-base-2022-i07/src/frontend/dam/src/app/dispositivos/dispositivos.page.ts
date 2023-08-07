import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service'

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit, OnDestroy {

  observable$: Observable<any>
  subscription: Subscription

  constructor(private _dispositivoService: DispositivoService) {
    this.observable$ = interval(1000)

    const move_values = this.observable$.pipe(map(val => val+10))

    this.subscription = move_values.subscribe((value) => {
      console.log(value)
    })
  }

  mouseMove = fromEvent(document, 'mousemove')

  subscription_mouse = this.mouseMove.subscribe((evt: any) => {
    console.log(`Coords: ${evt.clientX} X ${evt.clientY}`)
  })

  async ngOnInit() {
    this.subscription.unsubscribe()
    this.subscription_mouse.unsubscribe()

    await this._dispositivoService.getListadoDispositivos()
      .then((dispositivos) => {
        for (let dispositivo of dispositivos) {
          console.log(dispositivo.nombre)
        }
        console.log(dispositivos)
      })
      .catch((error) => {
        console.log(error)
      })
    console.log('Me ejecuto primero')
  }

  subscribe () {
    this.subscription = this.observable$.subscribe((integer) => {
      console.log(integer)
    })
  }

  unsubscribe () {
    this.subscription.unsubscribe()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    this.subscription_mouse.unsubscribe()
  }
}
