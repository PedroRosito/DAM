import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private _router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req)

    if (req.url.includes('/login')) {
      return next.handle(req)
    }

    const token = localStorage.getItem('token')

    if (token) {
      const reqWithAuthHeader = this.createAuthHeader(req, token)
      return next.handle(reqWithAuthHeader)
    } else {
      this._router.navigate(['/login'])
    }
    return next.handle(req)
  }

  createAuthHeader (req: HttpRequest<any>, token:string): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    })
  }
}
