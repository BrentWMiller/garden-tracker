import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

// rxjs
import { map } from 'rxjs/operators';

// services
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate() {
    return this.authService.state$.pipe(
      map((response) => {
        return response ? true : false;
      }),
    );
  }
}
