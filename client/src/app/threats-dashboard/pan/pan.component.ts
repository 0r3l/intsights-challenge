import { Component, Input} from '@angular/core';
import { WidgetWrapper } from '../../widgets/widget/widget-wrapper';

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.scss']
})
export class PanComponent {
  @Input() data: WidgetWrapper;
}
