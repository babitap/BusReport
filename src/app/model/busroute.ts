 export class Busroute { 
    organisation: String;     
    date:String;
    comments:String;
    busData: Busdata[];    
    }

 export class Busdata{
        busId:String;
        routeVariant:String;
        deviationFromTimetable: number;
    }