import { Injectable } from '@angular/core';
import { createTestCustomers } from "./test-data";
import { LoggerService } from "./logger.service";
import { Customer } from "./model";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable()
export class DataService {

    constructor(private logService: LoggerService) { }

    getCustomersP() : Promise<Customer[]> {
        this.logService.log('Getting customers as a Promise ...');
        var data = createTestCustomers();
        return new Promise<Customer[]>(resolve => {
            setTimeout(() => {
                this.logService.log('Got'+data.length+'customers');
                resolve(data);
            }, 15000);
        })
    }

    getCustomers() : Observable<Customer[]> {
        this.logService.log('Getting customers as an Observable');
        const data = createTestCustomers();
        return of(data)
        .delay(1500)
        .do(()=> {
            this.logService.log('Got ${customers.lenght}'+
            ' customers');
        });
    }
}  