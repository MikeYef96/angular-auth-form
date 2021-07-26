import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {LocalStorageService} from "../services/local-storage.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService, private router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      request = request.clone({
        setHeaders: {
          'X-Token': token,
        },
      });
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          this.localStorageService.setToken('');
          this.router.navigate(['/auth/login']);
        }
        return throwError(err);
      })
    );
  }
}
