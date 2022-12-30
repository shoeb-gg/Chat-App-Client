import { Injectable } from '@angular/core';

import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor() {}

  public socket: any;

  public connected: boolean = false;

  startSocket() {
    this.socket = io('http://localhost:4500');

    this.socket.on('connected', () => {
      this.connected = true;
      console.log('Socket connected with id: ' + this.socket.id);
    });
  }

  onlineUsersCount() {
    //need to set up observable for this function
  }
}
