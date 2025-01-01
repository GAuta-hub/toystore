import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AgGridModule } from 'ag-grid-angular';
import { ClientSideRowModelModule, ColDef, Module } from 'ag-grid-community';
import { CustomerService } from '../service/customer.service';
import { ActionComponent } from '../action/action.component';

@Component({
  selector: 'app-customers',
  imports: [MatButtonModule,AgGridModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit {
  rowData:any;
  constructor(private customerservices:CustomerService){}
 ngOnInit(): void {
   this.customerservices.getCustomerList().subscribe({
    next:(data:any)=>{
      this.rowData=data
    },
    error:(error:any)=>{}
   })
 }
 modules: Module[] = [ClientSideRowModelModule];



 coldefs:ColDef[] = [
     {
     headerName:"Select",
       editable: true,
       cellRenderer: (params: { value: any; }) => {
         return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
       }
     },
   {field: "Action",
     cellRenderer:ActionComponent,
   },
     { field: "customerId" },
     { field:"firstName"},
     {field:"lastName"},
     {field:"email"},
     {field:"phoneNumber"},
     {field:"address"},
     {field:"dateRegistered"},
     {field:"fieldNam"}
   ]
 
}
