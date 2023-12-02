import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, forkJoin, of } from 'rxjs';
import { InscriptionActions } from './inscription.actions';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environment.local';
import { Inscriptions } from '../models';
import { Student } from '../../students/models';
import { Course } from '../../courses/models';

@Injectable()
export class InscriptionEffects {
  loadInscriptions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscriptionActions.loadInscriptions),
      concatMap(() =>
        this.getInscriptions().pipe(
          map((data) => InscriptionActions.loadInscriptionsSuccess({ data })),
          catchError((error) =>
            of(InscriptionActions.loadInscriptionsFailure({ error }))
          )
        )
      )
    );
  });

  loadInscriptionsDialogOptions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscriptionActions.loadInscriptionsDialogOptions),
      concatMap(() =>
        this.getInscriptionDialogOptions().pipe(
          map(
            (respuesta) =>
              InscriptionActions.loadInscriptionsDialogOptionsSuccess(
                respuesta
              ),
            catchError((error) =>
              of(
                InscriptionActions.loadInscriptionsDialogOptionsFailure({
                  error,
                })
              )
            )
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  getInscriptionDialogOptions(): Observable<{
    courses: Course[];
    students: Student[];
  }> {
    return forkJoin([
      this.httpClient.get<Course[]>(`${environments.baseUrl}/courses`),
      this.httpClient.get<Student[]>(`${environments.baseUrl}/students`),
    ]).pipe(
      map((respuesta) => {
        return {
          courses: respuesta[0],
          students: respuesta[1],
        };
      })
    );
  }

  getInscriptions(): Observable<Inscriptions[]> {
    return this.httpClient.get<Inscriptions[]>(
      `${environments.baseUrl}/inscriptions?_expand=course&_expand=student`
    );
  }
}
