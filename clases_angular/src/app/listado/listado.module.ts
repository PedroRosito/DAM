import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado.component';
import { FormsModule } from '@angular/forms';
import { ElevarPipe } from '../pipes/elevar.pipe';
import { ColorearDirective } from '../directives/colorear.directive';



@NgModule({
  declarations: [
    ListadoComponent,
    ElevarPipe,
    ColorearDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ListadoComponent],
})
export class ListadoModule { }
