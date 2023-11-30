import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Inscriptions } from '../../models';
import { Observable } from 'rxjs';
import { selectInscriptions } from '../../store/inscription.selectors';

@Component({
  selector: 'app-inscriptions-table',
  templateUrl: './inscriptions-table.component.html',
  styleUrl: './inscriptions-table.component.scss',
})
export class InscriptionsTableComponent {
  displayedColumns = ['id', 'course', 'teacher', 'student', 'actions'];

  inscription$: Observable<Inscriptions[]>;

  constructor(private store: Store) {
    this.inscription$ = this.store.select(selectInscriptions);
  }
}
