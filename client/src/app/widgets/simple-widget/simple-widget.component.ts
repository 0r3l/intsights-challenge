import { Component, Input, OnInit } from '@angular/core';
import { ISimple } from '../types/simple.interface';

@Component({
  selector: 'app-simple-widget',
  templateUrl: './simple-widget.component.html',
  styleUrls: ['./simple-widget.component.scss']
})
export class SimpleWidgetComponent implements OnInit {
  @Input() data: ISimple;
  constructor() { }

  ngOnInit() {
  }

}
