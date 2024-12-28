import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule,MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {


  hide = signal(true);
  profileForm!: FormGroup<any>;

  constructor(private fb: FormBuilder, private login:LoginService) {
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
      console.log(data);


      },
      error:(error:any)=>{}
    })
  }

}
