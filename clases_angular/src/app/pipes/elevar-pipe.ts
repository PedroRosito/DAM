import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elevar',
  standalone: true
})
export class ElevarPipe implements PipeTransform {

  transform(value: number, potencia: number, resta: number): number {
    return Math.pow(value, potencia) - resta;
  }

}
