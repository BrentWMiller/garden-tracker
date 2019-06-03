import { Component } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'gt-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public async register(event) {
    const { email, password } = event;

    console.log(email, password);

    try {
      await this.authService.register(email, password);
      this.router.navigate(['/orders', 'manage']);
    } catch (error) {
      const { message } = error;
      this.error = message;
    }
  }
}
