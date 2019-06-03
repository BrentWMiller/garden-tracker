import { Component } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'gt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public async login(event) {
    const { email, password } = event;

    try {
      await this.authService.login(email, password);
      this.router.navigate(['/orders', 'manage']);
    } catch (error) {
      const { message } = error;
      this.error = message;
    }
  }
}
