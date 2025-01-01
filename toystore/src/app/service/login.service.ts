import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
   a:string="http://192.168.1.104:8080";
  constructor(private http:HttpClient) { }


getUserDetails():Observable<any>
{
  return this.http.get(this.a+"/getUserList");
}

addNewUser(value:any):Observable<any>
{
  console.log(value);
  return this.http.post(this.a+"/addNewUser",value);

}

}