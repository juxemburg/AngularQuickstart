import { Component, Input } from '@angular/core';
import { Customer, Address } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html',
  styleUrls: ['customer-detail.component.css']
})
export class CustomerDetailComponent {
  
  regions = ['East', 'West', 'North', 'South', 'Midwest'];
  states = ['California', 'Jalisco', 'Quebec', 'Illinois'];
  

  @Input() customer: Customer;
  showAddress: boolean = false;

}
