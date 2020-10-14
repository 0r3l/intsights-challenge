import { Component, Input} from '@angular/core';
import { IPan } from './interfaces/pan.interface';

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.scss']
})
export class PanComponent {
  @Input() data: IPan;
}
