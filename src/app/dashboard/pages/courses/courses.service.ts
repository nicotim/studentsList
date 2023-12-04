import { Injectable } from '@angular/core';
import { Course } from './models';
import { Observable, concatMap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environment.local';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${environments.baseUrl}/courses`);
  }

  createCourse(payload: Course): Observable<Course[]> {
    return this.httpClient
      .post<Course>(`${environments.baseUrl}/courses`, payload)
      .pipe(concatMap(() => this.getCourses()));
  }

  editCourse(courseId: number, payload: Course): Observable<Course[]> {
    return this.httpClient
      .put<Course>(`${environments.baseUrl}/courses/${courseId}`, payload)
      .pipe(concatMap(() => this.getCourses()));
  }

  deleteCourse(courseId: number): Observable<Course[]> {
    return this.httpClient
      .delete(`${environments.baseUrl}/courses/${courseId}`)
      .pipe(concatMap(() => this.getCourses()));
  }
}
