import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss'],
})
export class CoursesTableComponent {
  @Input()
  dataSource: Course[] = [];

  @Output()
  editCourse = new EventEmitter<Course>();

  @Output()
  deleteCourse = new EventEmitter<number>();

  displayedColumns: string[] = [
    'id',
    'name',
    'teacher',
    'startDate',
    'endDate',
    'actions',
  ];
}
