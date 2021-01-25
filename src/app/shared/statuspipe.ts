import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
      let result:string="";
      if(value < 200)
        result="On time"
      if(value > 200)
        result="Late"
      if(value < 0)
        result="Early"
      if(value == null )
       result="Unknown"  
      return result;   
    }
}