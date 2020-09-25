import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'split'
})
/*this pipe is useful for get the id in the url and display it*/
export class SplitPipe implements PipeTransform {
  transform(val: string, params: string): string {
    const valSplit = val.split(params);
    const valReturn = valSplit[valSplit.length - 2];
    return valReturn;
  }
}
