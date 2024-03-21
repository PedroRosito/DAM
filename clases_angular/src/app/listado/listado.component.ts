import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ListadoDispositivosService } from '../services/listado-dispositivos.service';
import { Dispositivo } from '../interfaces/dispositivo';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  constructor (private loggerService: LoggerService,
               private listadoDispositivosService: ListadoDispositivosService) {}

  // texto: string = 'Hola mundo!'
  // numeroTarjeta: string = ''
  // buttonState: boolean = true
  // number: number = 2

  listado: Dispositivo[] = this.listadoDispositivosService.getListadoDispositivos()

  manejador (eventData: any) {
    console.log(eventData)
  }

  // changeState (string: string) {
  //   this.buttonState = !this.buttonState
  //   this.loggerService.logWarning(string)
  //   this.loggerService.logError('Hubo un error')
  // }

  // name: FormControl = new FormControl("", [Validators.required])

  // loginForm: FormGroup = new FormGroup({
  //   user: new FormControl("", [Validators.required]),
  //   pass: new FormControl("", [Validators.required])
  // })

  // onSubmit() {
  //   console.log(this.loginForm.value)
  //   console.log(this.regForm.get('firstName')?.value)
  // }

  // regForm = new FormBuilder().group({
  //   firstName: ["", [Validators.required, Validators.maxLength(8)]],
  //   lastName: ["", [Validators.required, Validators.minLength(2)]],
  //   email: ["", [Validators.required, Validators.email]],
  //   pass: ["", [Validators.required, passwordValidator()]]
  // })
}

// export function passwordValidator (): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const value = control.value

//     if (!value) {
//       return null
//     }

//     const hasUpperCase = /[A-Z]+/.test(value)
//     const hasLowerCase = /[a-z]+/.test(value)
//     const hasNumber = /[0-9]+/.test(value)

//     const passwordValid = hasUpperCase && hasLowerCase && hasNumber

//     return !passwordValid ? {passwordStrength:true} : null
//   }
// }