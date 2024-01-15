import { Component } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-expenses-editor',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,MatNativeDateModule],
  templateUrl: './expenses-editor.component.html',
  styleUrl: './expenses-editor.component.css'
})
export class ExpensesEditorComponent {

}
