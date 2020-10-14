import { Pipe, PipeTransform } from '@angular/core';
import { chain } from 'lodash';

@Pipe({
  name: 'camelToSpace'
})
export class CamelToSpacePipe implements PipeTransform {

  transform(value: {}, ...args: any[]): any {
    const key = chain(value).keys().first().value();
    const keyGrouped = key.match(/[A-Z][a-z]+/g);
    return keyGrouped && keyGrouped.join(' ') || key;
  }

}
