import { Component } from '@angular/core';
import { ClockService } from './clock.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent {
  public time: any;
  constructor(private clockService: ClockService) {}

  ngOnInit() {
    this.time = this.clockService.getCurrentTime();
  }
}
