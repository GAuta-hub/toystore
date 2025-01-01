import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ClientSideRowModelModule, ColDef, Module } from 'ag-grid-community';
import { ProductService } from '../service/product.service';
import { ActionComponent } from '../action/action.component';
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
  },
  error:(data:any)=>{

  }
})
  }

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
    { field: "productId" },
    { field:"productName"},
    {field:"description"},
    {field:"category"},
    {field:"price"},
    {field:"stock_quantity"},
    {field:"manufacturer"},
    {field:"age_range"}
  ]

}
