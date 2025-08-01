import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { interval, Observable, Subscription, fromEvent } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service';

@Component({
  selector: 'app-listado-dispositivos',
  templateUrl: './listado-dispositivos.page.html',
  styleUrls: ['./listado-dispositivos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class ListadoDispositivosPage implements OnInit, OnDestroy {

  observable$: Observable<any>
  // subscription: Subscription
  dispositivos: any = []

  mouseMove$ = fromEvent(document, 'mousemove')

  constructor(public dispositivoService: DispositivoService) {
    this.observable$ = interval(1000)
    // this.subscription = this.observable$.subscribe((value) => {
    //   console.log(value)
    // })

    // this.subscription = this.mouseMove$.subscribe((evt: any) => {
    //   console.log(`Coords: ${evt.clientX} x ${evt.clientY} y`)
    // })
  }

  // subscribe () {
  //   this.subscription = this.mouseMove$.subscribe((evt: any) => {
  //     console.log(`Coords: ${evt.clientX} x ${evt.clientY} y`)
  //   })
  // }

  // unsubscribe () {
  //   this.subscription.unsubscribe()
  // }

  async ngOnInit() {
    await this.dispositivoService.getDispositivos()
      .then((res) => {
        this.dispositivos = res
        console.log(this.dispositivos)
        console.log("La promesa resolvió")
      })
      .catch((error) => {
        console.log(error)
      })
    // Acá pongo código que debería ejecutarse con this.dispositivos conteniendo un arreglo de dispositivos
    console.log("Ejecución fuera de la promesa")
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe()
  }
}
