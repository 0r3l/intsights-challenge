import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-risk-meter',
  templateUrl: './system-risk-meter.component.html',
  styleUrls: ['./system-risk-meter.component.scss']
})
export class SystemRiskMeterComponent implements OnInit {

  rmData = { SystemRiskMeter: 60, gradientRange: ['#BBB158', '#4DAFD0'], hideTitle: true };

  constructor() { }

  ngOnInit() {
  }

}
