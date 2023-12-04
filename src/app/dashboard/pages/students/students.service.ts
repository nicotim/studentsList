import { Injectable } from '@angular/core';
import { Student } from './models';
import { Observable, concatMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${environments.baseUrl}/students`);
  }

  createStudent(payload: Student): Observable<Student[]> {
    return this.httpClient
      .post<Student>(`${environments.baseUrl}/students`, payload)
      .pipe(concatMap(() => this.getStudents()));
  }

  updateStudent(studentId: number, payload: Student): Observable<Student[]> {
    return this.httpClient
      .put<Student>(`${environments.baseUrl}/students/${studentId}`, payload)
      .pipe(concatMap(() => this.getStudents()));
  }

  deleteStudent(studentId: number): Observable<Student[]> {
    return this.httpClient
      .delete(`${environments.baseUrl}/students/${studentId}`)
      .pipe(concatMap(() => this.getStudents()));
  }
}
