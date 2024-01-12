import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  earning: number;
  expences: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', earning: 1.0079, expences: 1 },
  { position: 2, name: 'Helium', earning: 4.0026, expences: 2 },
  { position: 3, name: 'Lithium', earning: 6.941, expences: 3 },
  { position: 4, name: 'Beryllium', earning: 9.0122, expences: 4 },
  { position: 5, name: 'Boron', earning: 10.811, expences: 5 },
  { position: 6, name: 'Carbon', earning: 12.0107, expences: 6 },
  { position: 7, name: 'Nitrogen', earning: 14.0067, expences: 7 },
  { position: 8, name: 'Oxygen', earning: 15.9994, expences: 8 },
  { position: 9, name: 'Fluorine', earning: 18.9984, expences: 9 },
  { position: 10, name: 'Neon', earning: 20.1797, expences: 10 },
];


@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.css'
})
export class TrackerComponent {
  displayedColumns: string[] = ['position', 'name', 'earning', 'expences'];
  dataSource = ELEMENT_DATA;
}
