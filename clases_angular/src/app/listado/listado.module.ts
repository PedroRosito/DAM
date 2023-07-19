import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElevarPipe } from '../pipes/elevar.pipe';
import { ColorearDirective } from '../directives/colorear.directive';
import { DispositivoComponent } from '../dispositivo/dispositivo.component';



@NgModule({
  declarations: [
    ListadoComponent,
    ElevarPipe,
    ColorearDirective,
    DispositivoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ListadoComponent],
})
export class ListadoModule { }
