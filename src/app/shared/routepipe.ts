import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'route'})
export class RoutePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
     let result:string="";
     let len =value.length;
     result= value.replace(value.substr(0,3), `<b>` + value.substr(0,3) + `</b>`);
 
    return result;   
    }
}