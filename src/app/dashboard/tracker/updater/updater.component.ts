import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ExpensesService } from '../../shared/service/expenses.service';

@Component({
  selector: 'app-updater',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule],
  templateUrl: './updater.component.html',
  styleUrl: './updater.component.css'
})
export class UpdaterComponent implements OnInit {

  updateForm: FormGroup = new FormGroup({})

  constructor(@Inject(DIALOG_DATA) public data: any, private _fb: FormBuilder, public dialogRef: DialogRef, private _expensesService: ExpensesService) { }

  ngOnInit(): void {

    this.updateForm = this._fb.group({
      date: [this.data.date, [Validators.required]],
      details: [this.data.details, [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/)]],
      earning: [this.data.earning, [Validators.required, Validators.pattern(/^\d+$/)]],
      expense: [this.data.expense, [Validators.required, Validators.pattern(/^\d+$/)]]
    })

    if (this.data.earning == undefined) {
      this.updateForm.get('earning')?.disable();
    } else {
      this.updateForm.get('expense')?.disable();
    }
  }

  onSubmit() {
    if (this.updateForm.valid) {
      this._expensesService.updateData(this.data._id, this.updateForm.value).subscribe({
        next: (response) => {
          console.log(response.message);
          this.dialogRef.close(true);
        },
        error: (error) => {
          console.log(error.error.message);
        }
      })
    }
  }
}
