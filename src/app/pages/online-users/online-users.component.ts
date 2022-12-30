import { Component, OnInit } from '@angular/core';

import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-online-users',
  templateUrl: './online-users.component.html',
  styleUrls: ['./online-users.component.scss'],
})
export class OnlineUsersComponent implements OnInit {
  constructor(private socketService: SocketService) {}

  public users: any[] = [
    { name: 'Peter Steele' },
    { name: 'Eminem' },
    { name: 'Fred Durst' },
    { name: 'Lana Del Rey' },
    { name: 'Ayub Bachhu' },
  ];

  ngOnInit(): void {
    this.socketService.onlineUsersCount();
  }
}
