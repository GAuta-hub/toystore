import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  a:string="192.168.1.104:8080";
  constructor( private http:HttpClient) { }

getproductDetails():Observable<any>{
  return this.http.get(this.a+"/getproductlist");
}

}
