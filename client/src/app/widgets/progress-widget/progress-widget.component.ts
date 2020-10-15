import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { range, chain } from 'lodash';
import { WidgetData } from '../interfaces/widget-data.interface';

@Component({
  selector: 'app-progress-widget',
  templateUrl: './progress-widget.component.html',
  styleUrls: ['./progress-widget.component.scss']
})
export class ProgressWidgetComponent implements AfterViewInit, OnInit {
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
    if (this.data) {
      this.initChart();
    }
  }

  initChart() {
    const options = this.data;
    const svg = d3.select('#chart' + this.id)
      .append('svg')
      .attr('height', 5)
      .attr('width', '100%');

    const states = range(0, 101);
    const segmentWidth = 1;
    const currentState = chain(options).values().first().value();

    const colorScale = d3.scaleLinear()
      .domain([0, 100])
      .range(options.gradientRange || this.defaultGradientRange);

    svg.append('rect')
      .attr('class', 'bg-rect')
      .attr('fill', '#1E3648')
      .attr('height', 5)
      .attr('width', '100%');


    const progress = svg.append('rect')
      .attr('class', 'progress-rect')
      .attr('fill', () => {
        return colorScale(currentState);
      })
      .attr('height', 5);

    progress.transition()
      .duration(1000)
      .attr('width', () => {
        const index = states.indexOf(currentState);
        return `${(index + 1) * segmentWidth}%`;
      });

  }

}
