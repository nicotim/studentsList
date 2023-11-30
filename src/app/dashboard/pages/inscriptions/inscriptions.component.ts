import { Component } from '@angular/core';
import { TextUpdateService } from '../../dashboard.service';
import { Store } from '@ngrx/store';
import { InscriptionActions } from './store/inscription.actions';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss'],
})
export class InscriptionsComponent {
  constructor(
    private textUpdateService: TextUpdateService,
    private store: Store
  ) {
    this.textUpdateService.updateText('Inscripciones');
    this.store.dispatch(InscriptionActions.loadInscriptions());
  }

  ngOnInit() {}
}
