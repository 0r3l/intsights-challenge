import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WidgetService } from '../../widgets/widgets.service';

@Component({
  selector: 'app-system-risk-meter',
  templateUrl: './system-risk-meter.component.html',
  styleUrls: ['./system-risk-meter.component.scss']
})
export class SystemRiskMeterComponent implements OnInit {
  rmData$;
  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
    this.rmData$ = this.widgetService.getRisk();
  }

}
