import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-system-risk-meter',
  templateUrl: './system-risk-meter.component.html',
  styleUrls: ['./system-risk-meter.component.scss']
})
export class SystemRiskMeterComponent {

  constructor() { }

  @Input() data;


}
