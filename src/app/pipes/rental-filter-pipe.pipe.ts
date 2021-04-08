import { Pipe, PipeTransform } from '@angular/core';
import { Rental } from '../models/rental';

@Pipe({
  name: 'rentalFilterPipe'
})
export class RentalFilterPipePipe implements PipeTransform {

  transform(value: Rental[], filterText:string): Rental[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';

    return filterText
      ? value.filter(
          (r: Rental) => r.firstName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }

}
