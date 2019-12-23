import { Injectable } from '@angular/core';
// import { ErrorDialogService } from '../error-dialog/errordialog.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service'

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {


  constructor(private auth: AuthenticationService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    const curObj = localStorage.getItem('currentUser');
    let authToken=JSON.parse(curObj);
    if (authToken) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Token ' + authToken.token) });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
          // this.errorDialogService.openDialog(event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
          reason: error && error.error.reason ? error.error.reason : '',
          status: error.status
        };
        if (error instanceof HttpErrorResponse && error.status === 401) {
          this.router.navigate(['/login']);
        }
        console.log(error);

        return throwError(error);
      }));
  }
}


