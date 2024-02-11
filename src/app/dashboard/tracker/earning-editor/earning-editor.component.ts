import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ExpensesService } from '../../shared/service/expenses.service';

@Component({
  selector: 'app-earning-editor',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './earning-editor.component.html',
  styleUrl: './earning-editor.component.css'
})
export class EarningEditorComponent implements OnInit {

  @Output() updateList = new EventEmitter<void>();

  public earningForm: FormGroup = new FormGroup({})

  constructor(private _fb: FormBuilder, private _expensesService: ExpensesService) { }

  ngOnInit(): void {
    this.earningForm = this._fb.group({
      date: ['', [Validators.required]],
      details: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/)]],
      earning: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    })
  }

  onSubmit() {
    if (this.earningForm.valid) {
      this._expensesService.addExpenseOrEarning(this.earningForm.value).subscribe({
        next: (response) => {
          console.log(response.message);
          this.updateList.emit()
        }, error: (error) => {
          console.log(error.error.message);
        }
      })
    }
  }
}
