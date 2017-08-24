import { Component } from '@angular/core';
import { Customer, Address } from './model';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  

  customer: Customer = { 
    id: 1,
    name: '',
    address: {
      city: 'Anytown',
      region: 'east',
      street:'123 main street',
      state: 'California'
    }
  };
  hideAddress: boolean = false;

}
