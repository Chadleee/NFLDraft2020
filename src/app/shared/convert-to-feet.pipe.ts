import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToFeet'
})
export class ConvertToFeetPipe implements PipeTransform {

  transform(value: number): string {
    return Math.floor(value / 12) + '-' + value % 12;
  }

}
