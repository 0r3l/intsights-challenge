import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { chain, get } from 'lodash';
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
  @Input() precentage = false;

  constructor() { }

  ngOnInit() {
    this.id = Math.random().toString().substr(2, 8);
    const count = chain(this.data).values().first();
    this.count = this.precentage ?
      count :
      Math.round(count / get(this.data, 'total') * 100);
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

    const width = Math.round(+svg.style('width').replace(/px/, ''));

    const segmentWidth = Math.floor(width / 100);
    const currentState = this.count;

    const colorScale = d3.scaleLinear()
      .domain([0, width])
      .range(options.gradientRange || this.defaultGradientRange);

    svg.append('rect')
      .attr('class', 'bg-rect')
      .attr('fill', '#1E3648')
      .attr('height', 5)
      .attr('width', '100%');


    const progress = svg.append('rect')
      .attr('class', 'progress-rect')
      .attr('fill', colorScale(0))
      .attr('height', 5);

    progress.transition()
      .duration(1000)
      .attr('width', currentState * segmentWidth)
      .attrTween('fill', () => (t) => colorScale(t));
  }

}
