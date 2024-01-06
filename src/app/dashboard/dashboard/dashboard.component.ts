import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService } from '../../authentication/shared/service/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private _router: Router, private _authService: AuthService) { }

  onLogout() {
    if (!!this._authService.getLocalStorageToken()) {
      localStorage.removeItem('token');
    }
    sessionStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
