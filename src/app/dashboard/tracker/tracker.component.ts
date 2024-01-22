import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ExpensesEditorComponent } from './expenses-editor/expenses-editor.component';
import { EarningEditorComponent } from './earning-editor/earning-editor.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion'
import { CommonModule } from '@angular/common';
import { ExpensesService } from '../shared/service/expenses.service';

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [MatTableModule, ExpensesEditorComponent, EarningEditorComponent, MatButtonModule, CommonModule, MatExpansionModule],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.css'
})
export class TrackerComponent implements OnInit {
  displayedColumns: string[] = ['date', 'details', 'earning', 'expense', 'delete', 'update'];
  dataSource: any[] = [];

  constructor(private _expensesService: ExpensesService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._expensesService.getAllData().subscribe(data => this.dataSource = data.data)
  }

  updateList(){
    this.getData()
  }

  onDelete(id: string) {
    this._expensesService.deleteEntry(id).subscribe({
      next: (response) => {
        console.log(response.message);
        this.getData();
      },
      error: (error) => {
        console.log(error.error.message)
      }
    })
  }

}
