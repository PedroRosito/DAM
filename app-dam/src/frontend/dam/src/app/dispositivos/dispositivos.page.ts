import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service';

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

    const valuePlusTen$ = this.observable$.pipe(map((val) => val+10))

    this.subscription = valuePlusTen$.subscribe((value) => {
      console.log(value)
    })
  }

  async ngOnInit() {
    await this._dispositivoService.getDispositivos()
      .then((dispositivos) => {
        console.log(dispositivos)
      })
      .catch((error) => {
        console.log(error)
      })
    console.log('Me ejecuto primero')
  }

  mouseMove$ = fromEvent(document, 'mousemove')

  subscriptionMouseMove = this.mouseMove$.subscribe((evt: any) => {
    console.log(`Coords: ${evt.clientX} X ${evt.clientY} Y`)
  })

  subscribe () {
    this.subscription = this.observable$.subscribe((value) => {
      console.log(value)
    })
  }

  unsubscribe () {
    this.subscription.unsubscribe()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    this.subscriptionMouseMove.unsubscribe()
  }
}
