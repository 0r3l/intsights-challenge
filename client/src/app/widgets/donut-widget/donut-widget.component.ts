import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as _ from 'lodash';
import { IWidgetComponent } from '../interfaces/widget-component.type';
import { WidgetData } from '../interfaces/widget-data.interface';

@Component({
  selector: 'app-donut-widget',
  templateUrl: './donut-widget.component.html',
  styleUrls: ['./donut-widget.component.scss']
})
export class DonutWidgetComponent implements OnInit, AfterViewInit, IWidgetComponent {

  constructor() { }
  id: string;
  @Input() data: WidgetData;

  ngOnInit() {
    this.id = Math.random().toString().substr(2, 8);
  }
  ngAfterViewInit() {
    this.initChart();
  }

  initChart() {
    const data = this.data;
    const newKeys = Object.keys(data);
    const dataset = Object.keys(data).map(k => ({ name: k, value: data[k] }));

    const color = d3.scaleOrdinal()
      .domain(newKeys)
      .range(['#4BAFD2', '#F0AC38', '#D24346']);

    const pie = d3.pie()
      .value(d => d.value)
      .sort(null);

    const w = 140;
    const h = 140;

    // donut size
    const outerRadius = 58.5;
    const innerRadius = 65.5;

    const arc = d3.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);

    const svg = d3.select('#chart' + this.id)
      .append('svg')
      .attr('width', w)
      .attr('height', h)
      .style('display', 'block')
      .style('margin', 'auto')
      .attr('class', 'shadow')
      .append('g')
      .attr('transform', 'translate(' + w / 2 + ',' + h / 2 + ')');


    const path = svg.selectAll('path')
      .data(pie(dataset))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d: any) => color(d.data.name));

    path.transition()
      .duration(1000)
      .attrTween('d', (d) => {
        const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return (t) => arc(interpolate(t));
      });


    const restOfTheData = () => {
      const text = svg.selectAll('text')
        .data(pie(dataset))
        .enter()
        .append('text')
        .attr('transform', (d: any) => {
          const _d = arc.centroid(d);
          _d[0] *= 1;	// multiply by a constant factor
          _d[1] *= 1;	// multiply by a constant factor
          return 'translate(' + _d + ')';
        })
        .attr('dy', '.50em')
        .attr('text-anchor', 'middle')
        .style('text-anchor', 'middle');

    };
    setTimeout(restOfTheData, 1000);
  }


}
