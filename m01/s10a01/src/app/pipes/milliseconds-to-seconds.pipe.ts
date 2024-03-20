import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millisecondsToSeconds',
  standalone: true
})
export class MillisecondsToSecondsPipe implements PipeTransform {

  transform(value: number | string): string {
    if (typeof value == "string"){
      const regex = new RegExp('([0-9]+)|([a-zA-Z]+)','g');
      const milliseconds : any = value.match(regex);
      if (milliseconds[0] != 1000){
        return `${milliseconds[0]/1000} seconds` ;
      }
      return `${milliseconds[0]/1000} second` ;
    } else if (typeof value == "number") {
      if (value != 1000){
        return `${value/1000} seconds` ;
      }
      return `${value/1000} second`;
    }
    return "undefined"
  }

}
