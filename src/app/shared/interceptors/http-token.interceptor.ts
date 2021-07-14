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

import { AuthService } from '../../core/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        // Authorization: `Bearer ${this.authService.getToken()}`,
        'Access-Control-Allow-Headers': [
          'Origin',
          'Methods',
          'Content-Type',
          'X-Token',
        ],
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        Connection: 'keep-alive',
      },
    });
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          this.authService.setToken('');
          this.router.navigate(['/login']);
        }
        return throwError(err);
      })
    );
  }
}
