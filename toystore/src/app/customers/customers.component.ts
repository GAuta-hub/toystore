import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-customers',
  imports: [MatButtonModule,AgGridModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

}
