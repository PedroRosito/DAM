import { Component, inject, Input, input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class Forms {
  // firstName: string = ''
  // lastName: string = ''

  // name: FormControl = new FormControl('', [Validators.required])

  // loginForm: FormGroup = new FormGroup({
  //   user: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required])
  // })

  // onSubmit () {
  //   console.log(this.loginForm, this.loginForm.value.user, this.loginForm.value.password)
  // }

  regForm = new FormBuilder().group({
    firstName: ['', [Validators.required, Validators.maxLength(10)]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  onSubmit () {
    // const payload = {
    //   firstName: this.regForm.value.firstName,
    //   lastName: this.regForm.value.lastName,
    //   email: this.regForm.value.email,
    //   password: this.regForm.value.password
    // }
    // this.myService.post(payload)
    console.log(this.regForm.value)
  }
}
