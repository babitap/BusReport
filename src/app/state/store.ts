import { data } from '../services/bus-services-data';
import { Busroute ,Busdata} from '../model/busroute';
import * as busactions from './action';

export interface IAppState {
    busroutes: Busroute[];    
    errorMessage: string;
    status: boolean;
}
export const INITIAL_STATE: IAppState = {
    busroutes: data,
    errorMessage: "",
    status: true,    
}  
export function rootReducer(state: IAppState, action:busactions.Actions): IAppState {
    switch (action.type) {
        case busactions.ActionTypes.GET_BUS_DETAILS:
            return {
                busroutes: state.busroutes,
                errorMessage:"",
                status: true,                
              };
        case busactions.ActionTypes.GET_BUS_DETAILS_SUCCESS:
            return {
                busroutes: state.busroutes,
                errorMessage:"",
                status: true, 
            };  
        case busactions.ActionTypes.GET_BUS_DETAILS_SUCCESS:
            return {
                busroutes: state.busroutes,
                errorMessage:"",
                status: true, 
            };                 
    
        case busactions.ActionTypes.ADD_BUS_DETAILS: 
            return {
                busroutes: state.busroutes,
                errorMessage:"",
                status: true,            
            };

        case busactions.ActionTypes.ADD_BUS_DETAILS_SUCCESS: 
            return {
               busroutes: state.busroutes,
               errorMessage:"",
               status: true, 
             };             
        case busactions.ActionTypes.ADD_BUS_DETAILS_FAIL: 
            return {
                ...state,
               busroutes: state.busroutes,
               errorMessage:"Error in Saving Bus Details",
               status: false,                          
             };        
    }
    return state;
}