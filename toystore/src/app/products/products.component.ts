import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ClientSideRowModelModule, ColDef, Module } from 'ag-grid-community';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-products',
  imports: [AgGridAngular],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  
  modules: Module[] = [ClientSideRowModelModule];
  rowData:any;

  constructor(private product:ProductService){}
 
  ngOnInit(): void {
this.product.getproductDetails().subscribe({
  next: (data:any)=>{
    this.rowData =data;
  }
})
  }

  coldefs:ColDef[] = [
    {
      field: "Select",
      editable: true,
      cellRenderer: (params: { value: any; }) => {
        return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
      }
    },
    { field: "" },
  ]

}
