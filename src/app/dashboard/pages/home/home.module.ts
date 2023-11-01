import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClockService } from './home.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule],
  providers: [ClockService],
  exports: [HomeComponent],
})
export class HomeModule {}
