import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <p><i>{{name}} is from {{region}}</i></p><br>
  <input [value]="name"><br>
  <input [(ngModel)]="name">

  <label><input type="checkbox" [(ngModel)]="hideAddress" >Hide Address</label>
  <div [hidden]="hideAddress">
    <fieldset>
      <label>street:</label>
      <input [(ngModel)]="street">
    </fieldset>
    <fieldset>
      <label>city:</label>
      <input [(ngModel)]="city">
    </fieldset>
  </div>
  <select [(ngModel)]="region">
    <option>North</option>
    <option>South</option>
    <option>West</option>
    <option>East</option>
  </select>
  `,
})
export class AppComponent  { 
  name:string = 'Alex Smith'; 
  street:string = '123 main street';
  city:string ='Anytown';
  region:string;
  hideAddress:boolean = false;

}
