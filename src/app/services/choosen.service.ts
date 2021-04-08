import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { ChoosenItem } from '../models/choosenItem';
import { ChoosenItems } from '../models/choosenItems';

@Injectable({
  providedIn: 'root',
})
export class ChoosenService {
  constructor() {}

  addToChoosen(car: Car) {
    let item = ChoosenItems.find((c) => c.car.carId === car.carId);
    if (item) {
      item.quantity += 1;
    } else {
      let choosenItem = new ChoosenItem();
      choosenItem.car = car;
      choosenItem.quantity = 1;
      ChoosenItems.push(choosenItem);
    }
  }
  removeFromChoosen(car:Car){
    let item = ChoosenItems.find((c) => c.car.carId === car.carId);
    if(item){
      ChoosenItems.splice(ChoosenItems.indexOf(item),1);
    }
  }

  list(): ChoosenItem[] {
    return ChoosenItems;
  }
}
