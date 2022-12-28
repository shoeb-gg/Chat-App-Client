import { Injectable } from '@angular/core';
import { Observable, observable, Subject, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { ErrorSnackbarComponent } from '../shared/error-snackbar/error-snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  private loggedInSub = new Subject<any>();
  loggedInFlagUpdater$ = this.loggedInSub.asObservable();

  authEndpoint = environment.backendUrl + '/auth/';

  loggedInstatusUpdater(stauts: boolean) {
    this.loggedInSub.next(stauts);
  }

  loggedInStatus() {
    return !!localStorage.getItem('token');
  }

  createUser(data: any) {
    return this.http.post(this.authEndpoint + 'register', data);
  }

  logInUser(data: any) {
    return this.http.post(this.authEndpoint + 'login', data);
  }

  retrieveToken() {
    return localStorage.getItem('token');
  }

  handleError(err: HttpErrorResponse) {
    this.snackBar.openFromComponent(ErrorSnackbarComponent, {
      duration: 5000,
      data: err,
    });
  }
}
