import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [LoginComponent, MatButtonModule, DialogModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

  constructor(private _dialog: Dialog) { }

  registerDialog() {
    this._dialog.open(RegisterComponent, { disableClose: true, autoFocus: false })
  }
}
