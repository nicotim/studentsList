import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.scss',
})
export class StudentsTableComponent {
  @Input()
  dataSource: Student[] = [];

  @Output()
  deleteStudent = new EventEmitter<number>();

  @Output()
  editStudent = new EventEmitter<Student>();

  displayedColumns: string[] = ['id', 'name', 'email', 'country', 'actions'];
}
