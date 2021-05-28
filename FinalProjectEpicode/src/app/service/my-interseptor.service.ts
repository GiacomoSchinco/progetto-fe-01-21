import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, finalize, tap, } from 'rxjs/operators';
import { UtentiService } from './utenti.service';


@Injectable({
  providedIn: 'root'
})
export class MyInterseptorService implements HttpInterceptor {

  constructor(private authService: UtentiService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let ok: string;
    let authReq: HttpRequest<any> = req;
    if (this.authService.accessUser) {
      authReq = req.clone({ headers: req.headers.set("Authorization", 'Bearer ' + this.authService.accessUser.accessToken) });
    }
    return next.handle(authReq)
      .pipe(
        tap(
          event => {
            ok = event instanceof HttpResponse ? 'succeeded' : ''
          },
          error => { }
        ),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        }),
        finalize(() => {
        })
      );
  }
}
