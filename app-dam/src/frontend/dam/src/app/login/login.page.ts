import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButton,
         IonButtons, IonLabel, IonList, IonItem, IonText, IonMenuButton
 } from '@ionic/angular/standalone';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonRow, IonCol, IonButton, IonButtons, IonLabel, IonList, IonItem, IonText, IonMenuButton]
})
export class LoginPage {
  // login = { username: '', password: '' };
  submitted = false;
  username = ''
  password = ''

  constructor(private _loginService: LoginService) { }

  onLogin() {
    this.submitted = true
    this._loginService.login(this.username, this.password)
  }
}
