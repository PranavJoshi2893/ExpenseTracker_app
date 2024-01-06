import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogRef } from '@angular/cdk/dialog';
import { AuthService } from '../shared/service/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(public dialogRef: DialogRef, private _fb: FormBuilder, private _authService: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      first_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{2,}$/)]],
      last_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{2,}$/)]],
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)]]
    })
  }

  onRegister() {
    if (this.registerForm.valid) {
      this._authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          this.showMessage(response.message);
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

}
