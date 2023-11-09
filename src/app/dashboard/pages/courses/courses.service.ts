import { Injectable } from '@angular/core';
import { Course } from './models';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  courses: Course[] = [
    {
      id: 1,
      name: 'Javascript',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 2,
      name: 'Angular',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: 3,
      name: 'ReactJS',
      startDate: new Date(),
      endDate: new Date(),
    },
  ];

  getCourses$(): Observable<Course[]> {
    return of(this.courses);
  }
}
