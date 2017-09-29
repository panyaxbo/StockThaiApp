import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _userService: UserService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this._userService.GetCurrentUserData()
          && this._userService.GetCurrentUserData().DisplayName !== '') {
            return Observable.of(true);

          } else {
            this.router.navigate(['/login']);
            return Observable.of(false);
          }
  }
}
