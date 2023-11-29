import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionsComponent } from './inscriptions.component';
import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { InscriptionEffects } from './store/inscription.effects';

@NgModule({
  declarations: [InscriptionsComponent],
  imports: [CommonModule, InscriptionsRoutingModule, EffectsModule.forFeature([InscriptionEffects])],
})
export class InscriptionsModule {}
