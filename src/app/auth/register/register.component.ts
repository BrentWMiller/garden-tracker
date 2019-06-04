import { Component } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'gt-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public error: string;

  constructor(private authService: AuthService, private router: Router) {}

  public async register(event) {
    try {
      await this.authService.register(event);
      this.router.navigate(['/']);
    } catch (error) {
      const { message } = error;
      this.error = message;
    }
  }
}
