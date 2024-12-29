import { Component, OnInit, } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule,MatCardModule,MatSelectModule,NgFor],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  
signUpForm!: FormGroup;



options = [
  { value: 'Admin', label: 'Admin' },
  { value: 'User', label: 'User' },
  
];


constructor(private fb:FormBuilder){
this.signUpForm=this.fb.group({
  username:[],
  emailid:[],
  phonenumber:[],
  password:[],
  reenterpassword:[],
  roles:[],


})
}
  ngOnInit(): void {

  }


addUser() {
  console.log(this.signUpForm);
  }
}
