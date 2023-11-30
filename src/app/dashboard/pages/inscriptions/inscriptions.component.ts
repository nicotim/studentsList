import { Component } from '@angular/core';
import { TextUpdateService } from '../../dashboard.service';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss'],
})
export class InscriptionsComponent {
  constructor(private textUpdateService: TextUpdateService) {
    this.textUpdateService.updateText('Inscripciones');
  }

  ngOnInit() {}
}
