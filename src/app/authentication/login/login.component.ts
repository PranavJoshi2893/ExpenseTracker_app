import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../shared/service/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, FormsModule, MatSnackBarModule, MatCheckboxModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private _fb: FormBuilder, private _authService: AuthService, private _snackBar: MatSnackBar, private _router: Router) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)]]
    })
  }

  onLogin() {
    if (this.loginForm.valid) {
      this._authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          if (this.rememberState) {
            localStorage.setItem("token", response.token);
          } else {
            sessionStorage.setItem("token", response.token)
          }
          this.showMessage(response.message);
          this._router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.showMessage(error.error.message);
        }
      })
    }
  }

  showMessage(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 10000
    });
  }

  rememberState = false;

  onRemember() {
    this.rememberState = !this.rememberState;
  }

}
