import { Component, OnInit } from '@angular/core';

import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-online-users',
  templateUrl: './online-users.component.html',
  styleUrls: ['./online-users.component.scss'],
})
export class OnlineUsersComponent implements OnInit {
  constructor(private socketService: SocketService) {}

  public users: any[] = [];

  ngOnInit(): void {
    this.users = this.socketService.onlineClients;
    this.socketService.onlineClientsUpdater$.subscribe((res) => {
      this.users = res.filter((v: any, i: any, s: any) => {
        return s.indexOf(v) === i;
      });
    });
  }
}
