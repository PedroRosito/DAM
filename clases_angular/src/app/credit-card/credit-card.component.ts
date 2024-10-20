import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.css'
})
export class CreditCardComponent {
  imgSrc: String = 'https://i.ibb.co/PYss3yv/map.png'
  number1: String = '1111'
  number2: String = '1111'
  number3: String = '1111'
  number4: String = '1111'
  name: String = 'Jon Doe'

  limpiar () {
    this.number1 = '1111'
    this.number2 = '1111'
    this.number3 = '1111'
    this.number4 = '1111'
    this.name = 'Jon Doe'
  }
}
