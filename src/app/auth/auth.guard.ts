import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.auth.loggedInStatus()) {
      this.auth.loggedInstatusUpdater(true);
      return true;
    } else {
      this.auth.loggedInstatusUpdater(false);
      this.router.navigate(['/login']);
      return false;
    }
  }
}
