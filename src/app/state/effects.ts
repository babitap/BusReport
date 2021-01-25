import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as busdetailActions from './action';
import { switchMap, map, debounceTime, catchError } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { Busroute } from '../model/busroute';
import { of } from 'rxjs';

@Injectable()
export class BusEffects {
  constructor(
    private _actions: Actions,
    private _dataService:DataService
  ) { }

  // @Effect() 
  // loadBusdetails$ = this._actions.pipe(
  //   ofType(busdetailActions.ActionTypes.GET_BUS_DETAILS), 
  //   switchMap(() => this._dataService.getBusrouteList()));


    @Effect() 
    loadBusDetailsList$ = this._actions.pipe(ofType(busdetailActions.ActionTypes.GET_BUS_DETAILS),
    debounceTime(200), 
    switchMap(
      (
        action: busdetailActions.LoadBusdetailsAction) => 
          this._dataService.getBusrouteList().pipe(
            map(
                ( busDetailsList: Busroute[]
                ) => new busdetailActions.LoadBusdetailsActionSuccess(busDetailsList)
              ),
            catchError((err) => of(new busdetailActions.LoadBusdetailsActionFail(err)))
          )
        )
      );
  
    @Effect() 
    saveBusDetailsComments$ = this._actions.pipe(
      ofType(busdetailActions.ActionTypes.ADD_BUS_DETAILS),  
      switchMap(
        (
          action: busdetailActions.SaveCommentsAction) => 
            this._dataService.saveBusroute(action.payload).pipe(
              map(
                  ( data: Busroute[]) => new busdetailActions.SaveCommentsActionSuccess(data)
                ),
              catchError((err) => of(new busdetailActions.SaveCommentsActionFail(err)))
            )
          )
        );  

        
}
