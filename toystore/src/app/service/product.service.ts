import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  a:string="http://192.168.1.104:8080";
  constructor( private http:HttpClient) { }

getproductDetails():Observable<any>{
  return this.http.get(this.a+'/getproductlist');
}

deleteproduct(productId:number):Observable<any>{
  return this.http.delete(this.a+`/deleteproduct/${productId}`)
}
}
