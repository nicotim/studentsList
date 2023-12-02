import { Component } from '@angular/core';
import { TextUpdateService } from '../../dashboard.service';
import { Store } from '@ngrx/store';
import { InscriptionActions } from './store/inscription.actions';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionDialogComponent } from './components/inscription-dialog/inscription-dialog.component';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss'],
})
export class InscriptionsComponent {
  constructor(
    private textUpdateService: TextUpdateService,
    private store: Store,
    private dialog: MatDialog
  ) {
    this.textUpdateService.updateText('Inscripciones');
    this.store.dispatch(InscriptionActions.loadInscriptions());
  }

  ngOnInit() {}

  addInscription(): void {
    this.dialog.open(InscriptionDialogComponent);
  }
}
