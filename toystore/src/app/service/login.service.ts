import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
   a="http://192.168.1.104:8080";
  constructor(private http:HttpClient) { }


getUserDetails():Observable<Login>
{
  return this.http.get(this.a+"/getUserList");
}



}