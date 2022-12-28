import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: any, next: any) {
    return next.handle(req).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          this.auth.handleError(err);
        } else {
          console.log('Unknown Error');
        }
        return throwError(() => new Error(err.statusText));
      })
    );
  }
}
