import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FormsComponent],
  imports: [CommonModule, SharedModule],
  exports: [FormsComponent],
})
export class FormsModule {}
