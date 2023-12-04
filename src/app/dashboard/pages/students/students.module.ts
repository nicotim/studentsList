import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDialogComponent,
    StudentsTableComponent,
  ],
  imports: [CommonModule, StudentsRoutingModule, SharedModule],
  exports: [StudentsComponent],
})
export class StudentsModule {}
