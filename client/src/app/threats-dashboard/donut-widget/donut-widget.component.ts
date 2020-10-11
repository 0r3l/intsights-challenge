import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as _ from 'lodash';

@Component({
  selector: 'app-donut-widget',
  templateUrl: './donut-widget.component.html',
  styleUrls: ['./donut-widget.component.scss']
})
export class DonutWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const result = [
      {
        "date": "2019-01-08T14:05:08.920Z",
        "severity": "Low",
        "type": "DataLeakage",
        "sourceType": "ApplicationStores",
        "networkType": "ClearWeb"
      },
      {
        "date": "2019-01-08T14:03:04.769Z",
        "severity": "High",
        "type": "DataLeakage",
        "sourceType": "BlackMarkets",
        "networkType": "ClearWeb"
      },
      {
        "date": "2019-01-08T13:13:05.615Z",
        "severity": "Medium",
        "type": "DataLeakage",
        "sourceType": "HackingForums",
        "networkType": "ClearWeb"
      },
      {
        "date": "2019-01-08T10:22:35.173Z",
        "severity": "Medium",
        "type": "DataLeakage",
        "sourceType": "Others",
        "networkType": "ClearWeb"
      },
    ]

    function groupingBy(data, groupby) {
      return _.groupBy(data, groupby);
    }


    const newGroupValue = groupingBy(result, 'severity');
    const newKeys = ['Low', 'Medium', 'High'];

    const dataset = [];
    // tslint:disable-next-line: forin
    for (const k in newGroupValue) {
      const kk = { name: k, value: newGroupValue[k].length };
      dataset.push(kk);
    }
    const userSelectedColors = ['value'];
    const totalCount = _.sumBy(userSelectedColors, _.partial(_.sumBy, dataset));

    console.log(totalCount);


    const color = d3.scaleOrdinal()
      .domain(newKeys)
      .range(['#4BAFD2', '#F0AC38', '#D24346']);

    const pie = d3.pie()
      .value((d: any) => d.value)
      .sort(null);

    const w = 140;
    const h = 140;

    // donut size
    const outerRadius = 58.5;
    const innerRadius = 65.5;

    const arc = d3.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);

    const svg = d3.select('#chart')
      .append('svg')
      .attr('width', w)
      .attr('height', h + 100)
      .attr('class', 'shadow')
      .append('g')
      .attr('transform', 'translate(' + w / 2 + ',' + h / 2 + ')');


    const path = svg.selectAll('path')
      .data(pie(dataset))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d: any, i: any) => color(d.data.name));

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
