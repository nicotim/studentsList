import { Component } from '@angular/core';
import { TextUpdateService } from '../../dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private textUpdateService: TextUpdateService) {}

  ngOnInit(): void {
    this.textUpdateService.updateText('Aplicación administrativa');
  }
}
