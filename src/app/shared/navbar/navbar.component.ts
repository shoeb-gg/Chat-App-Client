import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  loggedIn: boolean = false;

  ngOnInit(): void {
    this.auth.loggedInFlagUpdater$.subscribe((res) => {
      this.loggedIn = res;
    });
  }

  logOut() {
    localStorage.clear();
    this.loggedIn = false;
    location.reload();
  }
}
