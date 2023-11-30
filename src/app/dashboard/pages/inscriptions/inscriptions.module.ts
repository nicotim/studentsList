import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionsComponent } from './inscriptions.component';
import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { InscriptionEffects } from './store/inscription.effects';
import { StoreModule } from '@ngrx/store';
import { inscriptionFeature } from './store/inscription.reducer';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscriptionsTableComponent } from './components/inscriptions-table/inscriptions-table.component';

@NgModule({
  declarations: [InscriptionsComponent, InscriptionsTableComponent],
  imports: [
    CommonModule,
    InscriptionsRoutingModule,
    SharedModule,
    StoreModule.forFeature(inscriptionFeature),
    EffectsModule.forFeature([InscriptionEffects]),
    EffectsModule.forRoot([]),
  ],
})
export class InscriptionsModule {}
