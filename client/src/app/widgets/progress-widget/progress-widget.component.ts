import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { range, chain } from 'lodash';
import { IWidgetComponent } from '../interfaces/widget-component.type';
import { WidgetData } from '../interfaces/widget-data.interface';

@Component({
  selector: 'app-progress-widget',
  templateUrl: './progress-widget.component.html',
  styleUrls: ['./progress-widget.component.scss']
})
export class ProgressWidgetComponent implements OnInit, AfterViewInit, IWidgetComponent {
  id: string;
  count: number;
  defaultGradientRange = ['#8DB4D3', '#8DB4D3'];
  @Input() data: WidgetData;

  constructor() { }

  ngOnInit() {
    this.id = Math.random().toString().substr(2, 8);
    this.count = chain(this.data).values().first();
  }

  ngAfterViewInit() {
    this.initChart();
  }

  initChart() {
    const options = this.data;
    const svg = d3.select('#chart' + this.id)
      .append('svg')
      .attr('height', 10)
      .attr('width', 100);

    const states = range(0, 100);
    const segmentWidth = 1;
    const currentState = chain(options).values().first().value();

    const colorScale = d3.scaleOrdinal()
      .domain(states)
      .range(options.gradientRange || this.defaultGradientRange);

    svg.append('rect')
      .attr('class', 'bg-rect')
      .attr('rx', 10)
      .attr('ry', 10)
      .attr('fill', '#1E3648')
      .attr('height', 10)
      .attr('width', 100)
      .attr('x', 0);

    const progress = svg.append('rect')
      .attr('class', 'progress-rect')
      .attr('fill', () => {
        return colorScale(currentState);
      })
      .attr('height', 10)
      .attr('width', 0)
      .attr('rx', 10)
      .attr('ry', 10)
      .attr('x', 0);

    progress.transition()
      .duration(1000)
      .attr('width', () => {
        const index = states.indexOf(currentState);
        return (index + 1) * segmentWidth;
      });

  }

}
