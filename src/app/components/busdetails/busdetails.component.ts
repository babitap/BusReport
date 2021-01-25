import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild, SimpleChanges} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../state/store';

@Component({
  selector: 'app-busdetails',
  templateUrl: './busdetails.component.html',
  styleUrls: ['./busdetails.component.scss']
})
 
   
export class BusdetailsComponent implements OnInit {
  @Input() source: any;
 
  dataSource;
  displayedColumns = [];
  data: any[];

  @ViewChild(MatSort) sort: MatSort;

  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<Element>(this.allowMultiSelect, this.initialSelection);

  selecteditem = '';
  selectedprice :number;
  selectedproductid:number;
  selectedoption: any;

  columnNames = [{id: 'busId', value: 'Bus Id'},
                { id: 'routeVariant', value: 'Route variant'},
                { id: 'deviationFromTimetable', value: 'Status'}
              ];


  selectedproduct: any;
  selectedfullproductname: string;
  loading: boolean;

  @select() busroutes;

  constructor(private ngRedux: NgRedux<IAppState>) {  
  }

  ngOnInit() {
    debugger;
    this.displayedColumns = this.columnNames.map(x => x.id);         
  }

  ngOnChanges(changes:SimpleChanges)
  {    
    debugger;
    if(changes.source.currentValue.data){
      this.createTable(changes.source.currentValue.data); 
    }   
  }

  createTable(data:any[]) {            
      this.dataSource = new MatTableDataSource(data );
      console.log(this.dataSource);     
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;  
  }
  
  getelement(element) {
    let len =element.routeVariant.length;
    let result= element.routeVariant.substr(0,3);
    let str = element.routeVariant.substr(4,len);
    return `<b>${result} </b> &nbsp  ${str}`;
}

}
