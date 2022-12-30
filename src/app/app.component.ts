import { Component, OnInit } from '@angular/core';

import { SocketService } from './services/socket.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private socketService: SocketService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.auth.loggedInFlagUpdater$.subscribe((res) => {
      res ? this.socketService.startSocket() : '';
    });
  }
}
