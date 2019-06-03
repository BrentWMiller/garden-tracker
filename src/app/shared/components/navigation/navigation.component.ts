import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'gt-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  authenticated: any;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authService.authState().subscribe((user) => {
      this.authenticated = user ? true : false;
    });
  }

  public async logout() {
    await this.authService.logout();
    this.router.navigate(['/']);
  }

}
