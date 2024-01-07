// auth.guard.ts
import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, map, take, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return timer(500).pipe(
      take(1),
      map(() => {
        const isLogin = state.url.includes('/login');
        const isAuthenticated = this.authService.isAuthenticated;
        if (isAuthenticated) {
          if (isLogin) {
            this.router.navigate(['/dashboard']);
            return false;
          }
        } else if (!isLogin) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
