import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private _router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Estoy en el interceptor')

    if(req.url.includes('/login')) {
      return next.handle(req)
    }
    const token = localStorage.getItem('token')
  
    if (token) {
      const reqWithAuthHeader = this.createAuthHeader(req, token)
      return next.handle(reqWithAuthHeader).pipe(
        catchError((error: HttpErrorResponse) => {
          let msg = ''
          if (error.error instanceof ErrorEvent) {
            msg = error.error.message
          } else {
            msg = `Error ${error.message} status ${error.status}`
          }
        return throwError(() => {new Error(msg)})
        })
      )
    } else {
      this._router.navigate(['/login'])
    }
    return next.handle(req)
  }

  createAuthHeader (req: HttpRequest<any>, token: string): HttpRequest<any>{
    return req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    })
  }
}
