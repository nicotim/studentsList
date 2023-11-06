import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClockService } from './clock.service';

@NgModule({
  declarations: [ClockComponent],
  imports: [CommonModule, SharedModule],
  providers: [ClockService],
  exports: [ClockComponent],
})
export class ClockModule {}
