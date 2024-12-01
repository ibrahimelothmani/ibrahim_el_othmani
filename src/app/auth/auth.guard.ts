import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private canAccessSuccess = false;

  constructor(private auth: AngularFireAuth, private router: Router) {}

  canActivate(route: any): Promise<boolean> {
    if (route.url[0].path === 'success' && !this.canAccessSuccess) {
      this.router.navigate(['/']);
      return Promise.resolve(false);
    }

    return this.auth.currentUser.then((user) => {
      if (user || route.url[0].path === 'success') {
        if (route.url[0].path === 'success') {
          this.canAccessSuccess = false; // Reset access flag after success
        }
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    });
  }

  allowSuccessAccess() {
    this.canAccessSuccess = true;
  }
}
