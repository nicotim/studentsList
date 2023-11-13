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
      endDate: new Date().setFullYear(2024, 2, 21),
    },
    {
      id: 2,
      name: 'Angular',
      startDate: new Date().setMonth(11),
      endDate: new Date().setFullYear(2024, 3, 30),
    },
    {
      id: 3,
      name: 'ReactJS',
      startDate: new Date().setDate(5),
      endDate: new Date().setFullYear(2024, 5, 14),
    },
  ];

  getCourses$(): Observable<Course[]> {
    return of(this.courses);
  }

  createCourse$(payload: Course): Observable<Course[]> {
    this.courses.push(payload);
    return of([...this.courses]);
  }

  editCourse$(id: number, payload: Course): Observable<Course[]> {
    return of(
      this.courses.map((c) => (c.id === id ? { ...c, ...payload } : c))
    );
  }

  deleteCourse$(courseId: number): Observable<Course[]> {
    this.courses = this.courses.filter((course) => course.id !== courseId);
    return of(this.courses);
  }

  getCourseById$(id: number): Observable<Course | undefined> {
    return of(this.courses.find((c) => c.id === id));
  }
}
