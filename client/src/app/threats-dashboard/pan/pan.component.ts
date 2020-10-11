import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { WidgetItem } from '../widget/widget-item';
import { WidgetComponent } from '../widget/widget.component';
import { PanDirective } from './pan.directive';

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.scss']
})
export class PanComponent implements OnInit {

  @Input() widget: WidgetItem;
  @ViewChild(PanDirective, {static: true}) adHost: PanDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.widget.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<WidgetComponent>(componentFactory);
    componentRef.instance.data = this.widget.data;
  }

}
