import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-widget',
  templateUrl: './simple-widget.component.html',
  styleUrls: ['./simple-widget.component.scss']
})
export class SimpleWidgetComponent implements OnInit {
  @Input() data: Array<{ title: string, count: number }> = [];
  constructor() { }

  ngOnInit() {
  }

}
