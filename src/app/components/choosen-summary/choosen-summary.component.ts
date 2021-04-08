import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { ChoosenItem } from 'src/app/models/choosenItem';
import { ChoosenService } from 'src/app/services/choosen.service';

@Component({
  selector: 'app-choosen-summary',
  templateUrl: './choosen-summary.component.html',
  styleUrls: ['./choosen-summary.component.css'],
})
export class ChoosenSummaryComponent implements OnInit {
  choosenItems: ChoosenItem[] = [];
  
  constructor(private choosenService:ChoosenService, private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.getChoosen();
  }

  getChoosen(){
    this.choosenItems = this.choosenService.list();
  }

  removeFromChoosen(car:Car){
    this.choosenService.removeFromChoosen(car);
    this.toastrService.error("Silindi",car.brandName);
  }
}
