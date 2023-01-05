import { Injectable } from '@angular/core';
import { Observable, observable, Subject, throwError } from 'rxjs';

import { io } from 'socket.io-client';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private auth: AuthService) {}

  public socket: any;

  public connected: boolean = false;

  public onlineClients = [];
  private onlineClientsSub = new Subject<any>();
  onlineClientsUpdater$ = this.onlineClientsSub.asObservable();

  startSocket() {
    this.socket = io('http://localhost:4500');

    this.socket.on('connected', () => {
      this.connected = true;
      console.log('Socket connected with id: ' + this.socket.id);

      this.emitUserCred();
    });

    this.socket.on('online-users', (data: any) => {
      this.onlineClients = data;
      this.onlineClientsSub.next(data);
    });
  }

  emitUserCred() {
    if (this.auth.loggedInStatus()) {
      let name = localStorage.getItem('name');
      let id = localStorage.getItem('id');

      this.socket.emit('Client Cred', {
        name: name,
        id: id,
        socketId: this.socket.id,
      });
    }
  }
}
