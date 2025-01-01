import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-action',
  imports: [MatIconModule],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss'
})
export class ActionComponent implements ICellRendererAngularComp{
  agInit(params: ICellRendererParams<any, any, any>): void {

  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }

}
