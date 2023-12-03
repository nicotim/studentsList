import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Inscriptions } from '../../models';
import { Observable } from 'rxjs';
import { selectInscriptions } from '../../store/inscription.selectors';
import { InscriptionActions } from '../../store/inscription.actions';

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

  deleteInscription(inscriptionId: number): void {
    this.store.dispatch(
      InscriptionActions.deleteInscription({ inscriptionId })
    );
  }
}
