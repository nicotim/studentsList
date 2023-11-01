import { Component } from '@angular/core';
import { ClockService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public time: any;
  constructor(private clockService: ClockService) {}

  ngOnInit() {
    this.time = this.clockService.getCurrentTime();
  }
}
