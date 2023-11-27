import { Component } from '@angular/core';
import { TextUpdateService } from '../../dashboard.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  constructor(private textUpdateService: TextUpdateService) {}

  ngOnInit() {
    this.textUpdateService.updateText('Estudiantes');
  }
}
