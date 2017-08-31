import { Component, OnInit } from '@angular/core';
import { Customer, Address } from './model';
import { DataService } from "./data.service";
import { LoggerService } from "./logger.service";

@Component({
  moduleId: module.id,
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  customer: Customer;
  isBusy = false;

  constructor(private dataService: DataService,
    private logService: LoggerService) {

  }

  ngOnInit(): void {
    
    this.getCustomers();
  }

  getCustomers() {
    this.isBusy = true;
    this.logService.log('Getting customers...');
    // this.dataService.getCustomersP().then(data => {
    //   this.customers = data;
    //   this.isBusy = false;
    // });
    this.dataService.getCustomers().subscribe(data => {
      this.customers = data;
      this.isBusy = false;
    });
  }


  shift(increment: number) {
    let ix = this.customers
      .findIndex(c => c === this.customer) + increment;
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));

    this.customer = this.customers[ix];
  }

}
