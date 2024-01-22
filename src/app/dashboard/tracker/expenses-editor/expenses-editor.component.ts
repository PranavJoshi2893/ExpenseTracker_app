import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ExpensesService } from '../../shared/service/expenses.service';

@Component({
  selector: 'app-expenses-editor',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './expenses-editor.component.html',
  styleUrl: './expenses-editor.component.css'
})
export class ExpensesEditorComponent implements OnInit {
  @Output() updateList = new EventEmitter<void>();
  
  expensesForm: FormGroup = new FormGroup({});

  constructor(private _fb: FormBuilder, private _expensesService: ExpensesService) { }

  ngOnInit(): void {
    this.expensesForm = this._fb.group({
      date: ['', [Validators.required]],
      details: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/)]],
      expense: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    })
  }

  onSubmit() {
    if (this.expensesForm.valid) {
      this._expensesService.addExpense(this.expensesForm.value).subscribe({
        next: (response) => {
          console.log(response.message)
          this.updateList.emit()
        },
        error: (error) => {
          console.log(error.error.message)
        }
      })
    }
  }

}
