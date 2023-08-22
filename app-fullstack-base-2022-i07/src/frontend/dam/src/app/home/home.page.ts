import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _loginService: LoginService, private _homeService: HomeService) {}

  logOut () {
    this._loginService.logout()
  }

  consultaPrueba () {
    this._homeService.consulta()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
