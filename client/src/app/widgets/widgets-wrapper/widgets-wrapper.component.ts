import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, Input, ViewChildren } from '@angular/core';
import { LayoutType } from '../interfaces/layout-type.enum';
import { WidgetItem } from '../widget/widget-item';
import { WidgetDirective } from '../widget/widget.directive';

@Component({
  selector: 'app-widgets-wrapper',
  templateUrl: './widgets-wrapper.component.html',
  styleUrls: ['./widgets-wrapper.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class WidgetsWrapperComponent implements AfterViewInit {

  @Input() data: WidgetItem[];
  @Input() layout: LayoutType;
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

    this.data.forEach((widgetItem, index) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(widgetItem.component);
      const viewContainerRef = (this.widgetContent as any)._results[index].viewContainerRef;
      const componentRef = viewContainerRef.createComponent(componentFactory);
      componentRef.instance.data = widgetItem.data;
    });

  }

}
