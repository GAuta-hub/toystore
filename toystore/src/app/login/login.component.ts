import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {


  hide = signal(true);
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder, private login:LoginService, private router:Router,private dialog:MatDialog) {
    this.profileForm=this.fb.group({
      username:["",],
      password:["",]
  
     }) 
  }
  
  ngOnInit(): void {
   
  }


  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onSubmit() { 
    this.login.getUserDetails().subscribe({
      next:(data:any)=>{ 
        let listofusers:any[]=[];
        for(let a=0;a<data.length;a++){
          listofusers.push(data[a].userName,data[a].password);
        }
     (listofusers.includes(this.profileForm.controls['username'].value) && listofusers.includes(this.profileForm.controls['password'].value))?

      this.router.navigate(["/dashboard"]):
     alert("no user found")
      
    },
      error:(error:any)=>{}
    })
  }

  onSignup() {
    this.dialog.open(SignupComponent);
    }

    onForgot() {
     alert("method not implemented");
      }
}
