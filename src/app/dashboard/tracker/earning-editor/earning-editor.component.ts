import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-earning-editor',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './earning-editor.component.html',
  styleUrl: './earning-editor.component.css'
})
export class EarningEditorComponent {

}
