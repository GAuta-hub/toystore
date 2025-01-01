import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ClientSideRowModelApiModule, ClientSideRowModelModule, ColDef, GridApi, GridReadyEvent, Module, ModuleRegistry, NumberEditorModule, RowApiModule, RowSelectionModule, SelectionChangedEvent, TextEditorModule, ValidationModule,  } from 'ag-grid-community';
import { ProductService } from '../service/product.service';
import { MatButtonModule } from '@angular/material/button';
import { ActionComponent } from '../action/action.component';
ModuleRegistry.registerModules([
  ClientSideRowModelApiModule,
  RowSelectionModule,
  RowApiModule,
  ClientSideRowModelModule,
  ValidationModule,
  NumberEditorModule,TextEditorModule
]);

@Component({
  selector: 'app-products',
  imports: [AgGridAngular, MatButtonModule,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {




  modules: Module[] = [ClientSideRowModelModule];
  rowData:any[]=[] ;
  gridApi!: GridApi;
 

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.getproductDetails().subscribe({
      next: (data: any) => {
        this.rowData = data;
      },
      error: (data: any) => {

      }
    })
  }

  coldefs: ColDef[] = [
    {
      headerName: "Select",
      editable: true,
      cellRenderer: (params: { value: any; }) => {
        return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
      }
    },
    {
      field: "Action",
      cellRenderer: ActionComponent,
    },
    { field: "productId",editable:false },
    { field: "productName",editable:true },
    { field: "description",editable:true },
    { field: "category",editable:true },
    { field: "price",editable:true },
    { field: "stock_quantity",editable:true },
    { field: "manufacturer",editable:true },
    { field: "age_range",editable:true }
  ]

 
  additems() {
        
      this.gridApi.applyTransaction({
        addIndex:0,
        add:[0],
        
      });
    }
    
    deleteitem() {
      const selectedData = this.gridApi.getSelectedRows();
      console.log(selectedData+"asiuyioqaudrwqwrlfhdsoefuw");
      this.gridApi.applyTransaction({

       remove:[selectedData]
      })
      }

      onSelectionData($event: SelectionChangedEvent) {
        console.log(event+"+++9+++587+++++++++++++++++++++++++++++++++++++++");
        }
}
