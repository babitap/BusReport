import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../state/store';
import { FormGroup } from '@angular/forms';
import { Busdata, Busroute } from '../../model/busroute';
import { LoadBusdetailsAction, SaveCommentsAction } from '../../state/action';

@Component({
  selector: 'app-busroute',
  templateUrl: './busroute.component.html',
  styleUrls: ['./busroute.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush  
})
export class BusrouteComponent {
  
  @select() busroutes; 
  @select() status; 
  @select() errorMessage; 

  BusForm: FormGroup;
  loading:boolean=true;
  busdata:Busdata[]=[];

  selectedTitle: string = '';
  comments: string = '';
  constructor(private ngRedux: NgRedux<IAppState>) {    
    this.ngRedux.dispatch({type: LoadBusdetailsAction});
   }
  
  onSave(){
    debugger;
    let response;  
    let errorMessage;    
    this.ngRedux.dispatch({type: SaveCommentsAction, busdetail: this.busroutes});
    this.ngRedux.select('status').subscribe(status => {
      response=status;
      console.log('status', status);
    });

    if(response==true)
    {
      this.Reset();  
      alert("Notes succesfully saved!!!");     
    }
    else
    {
      this.Reset();  
      this.ngRedux.select('errorMessage').subscribe(err => {
        errorMessage=err;        
      });
      alert(this.errorMessage);     
    }  
  }

  Reset(){  
    this.comments="";    
  }
}
