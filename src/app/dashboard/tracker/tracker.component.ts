import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ExpensesEditorComponent } from './expenses-editor/expenses-editor.component';
import { EarningEditorComponent } from './earning-editor/earning-editor.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

export interface PeriodicElement {
  name: string;
  date: string;
  earning: number;
  expences: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { date: "2024-01-01", name: 'Hydrogen', earning: 1.0079, expences: 1 },
  { date: "2024-01-01", name: 'Helium', earning: 4.0026, expences: 2 },
  { date: "2024-01-01", name: 'Lithium', earning: 6.941, expences: 3 },
  { date: "2024-01-01", name: 'Beryllium', earning: 9.0122, expences: 4 },
  { date: "2024-01-01", name: 'Boron', earning: 10.811, expences: 5 },
  { date: "2024-01-01", name: 'Carbon', earning: 12.0107, expences: 6 },
  { date: "2024-01-01", name: 'Nitrogen', earning: 14.0067, expences: 7 },
  { date: "2024-01-01", name: 'Oxygen', earning: 15.9994, expences: 8 },
  { date: "2024-01-01", name: 'Fluorine', earning: 18.9984, expences: 9 },
  { date: "2024-01-01", name: 'Neon', earning: 20.1797, expences: 10 },
];


@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [MatTableModule, ExpensesEditorComponent, EarningEditorComponent, MatButtonModule, CommonModule],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.css'
})
export class TrackerComponent {
  displayedColumns: string[] = ['date', 'name', 'earning', 'expences'];
  dataSource = ELEMENT_DATA;

  switchEditor = false;

  addExpenses() {
    this.switchEditor = true;
  }

  addEarning() {
    this.switchEditor = false;
  }

}
