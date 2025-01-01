import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  a:string="http://192.168.1.104:8080";

  constructor(private http:HttpClient) { }

  getCustomerList() :Observable<Customer>{
    return this.http.get(this.a+"/getCustomerslist");
  }
}
