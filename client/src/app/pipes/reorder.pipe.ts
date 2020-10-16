import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reorder'
})
export class ReorderPipe implements PipeTransform {

  transform(keyvalueArray: { key: any, value: any }[], ...args: any[]): any {
    return args.reduce((acc, s) => {
      acc.push(keyvalueArray.find(kv => kv.key === s));
      return acc;
    }, []);
  }

}
