import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, Input, ViewChildren } from '@angular/core';
import { WidgetWrapper } from '../widget/widget-wrapper';
import { WidgetDirective } from '../widget/widget.directive';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent implements AfterViewInit {

  @Input() data: WidgetWrapper;
  @ViewChildren(WidgetDirective, {}) widgetContent: WidgetDirective;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private ref: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    this.loadComponent();
    this.ref.detectChanges();
  }

  loadComponent() {

    const widgetItems = this.data.content;

    widgetItems.forEach((widgetItem, index) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(widgetItem.component);
      const viewContainerRef = (this.widgetContent as any)._results[index].viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
      componentRef.instance.data = widgetItem.data;
    });

  }

}
