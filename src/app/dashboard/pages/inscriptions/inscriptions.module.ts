import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionsComponent } from './inscriptions.component';
import { InscriptionsRoutingModule } from './inscriptions-routing.module';

@NgModule({
  declarations: [InscriptionsComponent],
  imports: [CommonModule, InscriptionsRoutingModule],
})
export class InscriptionsModule {}
