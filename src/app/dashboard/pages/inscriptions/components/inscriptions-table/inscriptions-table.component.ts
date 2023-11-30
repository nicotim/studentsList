import { Component } from '@angular/core';

@Component({
  selector: 'app-inscriptions-table',
  templateUrl: './inscriptions-table.component.html',
  styleUrl: './inscriptions-table.component.scss',
})
export class InscriptionsTableComponent {
  displayedColumns = ['id', 'course', 'student', 'actions'];
}
