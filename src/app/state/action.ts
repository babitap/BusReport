// import { Action } from '@ngrx/store';
import { Busroute } from '../model/busroute';
import { Action } from 'redux';

export const ActionTypes = {
  GET_BUS_DETAILS: 'Loading bus details',
  ADD_BUS_DETAILS: 'Add bus details',
  GET_BUS_DETAILS_SUCCESS: 'Loading bus details Successfully',
  ADD_BUS_DETAILS_SUCCESS: 'Add bus details Successfully',
  GET_BUS_DETAILS_FAIL: 'Loading bus details Failed',
  ADD_BUS_DETAILS_FAIL: 'Add bus details Failed'
};

export class LoadBusdetailsAction implements Action {
  type = ActionTypes.GET_BUS_DETAILS;
  constructor(public payload:Busroute[]) { }
}
  
export class SaveCommentsAction implements Action {
  type = ActionTypes.ADD_BUS_DETAILS;
  constructor(public payload:Busroute[]) { }
} 
 
export class LoadBusdetailsActionSuccess implements Action {
  type = ActionTypes.GET_BUS_DETAILS_SUCCESS;
  constructor(public payload:Busroute[]) { }
}
  
export class SaveCommentsActionSuccess implements Action {
  type = ActionTypes.ADD_BUS_DETAILS_SUCCESS;
  constructor(public payload:Busroute[]) { }
}
export class LoadBusdetailsActionFail implements Action {
  type = ActionTypes.GET_BUS_DETAILS_FAIL;
  constructor(public payload:string) { }
}
  
export class SaveCommentsActionFail implements Action {
  type = ActionTypes.ADD_BUS_DETAILS_FAIL;
  constructor(public payload:string) { }
}
export type Actions =
  LoadBusdetailsAction |
  SaveCommentsAction |
  LoadBusdetailsActionSuccess |
  SaveCommentsActionSuccess |
  LoadBusdetailsActionFail |
  SaveCommentsActionFail 