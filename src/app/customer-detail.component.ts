import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Customer, Address } from './model';



@Component({
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html',
  styleUrls: ['customer-detail.component.css']
})
export class CustomerDetailComponent {
  @Input() customer: Customer;
  @Output() shift: EventEmitter<number> = new EventEmitter();



  showAddress: boolean = false;

  left() {
    this.shift.emit(-1);

  }

  right() {
    this.shift.emit(1);
  }

}
