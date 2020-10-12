import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { range } from 'lodash';
import { IProgress } from '../types/progress.interface';


@Component({
  selector: 'app-progress-widget',
  templateUrl: './progress-widget.component.html',
  styleUrls: ['./progress-widget.component.scss']
})
export class ProgressWidgetComponent implements OnInit {

  defaultGradientRange = ['#8DB4D3', '#8DB4D3'];

  @Input() data: IProgress;

  constructor() { }

  ngOnInit() {
    this.initChart(this.data);
  }

  initChart(options: IProgress) {

    const svg = d3.select('#progress')
      .append('svg')
      .attr('height', 10)
      .attr('width', 100);

    const states = range(0, 100);
    const segmentWidth = 1;
    const currentState = options.value;

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
