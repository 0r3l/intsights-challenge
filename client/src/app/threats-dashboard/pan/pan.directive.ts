// tslint:disable: directive-selector
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[panHost]',
})
export class PanDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
