import { Injectable } from '@angular/core';
import { 
  HttpEvent, HttpRequest, HttpHandler, 
  HttpInterceptor, HttpErrorResponse 
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  constructor(private router:Router,public matDialog: MatDialog){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse|any) => {
        let counter:number=0;
        if (error.status == 0){ 
          if(counter==0){
            counter=counter + 1;
          }
          this.router.navigate(['/error']);          
          console.log('error-API service not running');
          return throwError("error-API service not running");
          } 
        if (error.status === 401) {
          console.log("error-interceptor");                    
        }   
        if (error.status === 404) {         
          if(counter==0){            
            counter=counter + 1;
          }
          console.log("No data found");         
          return throwError("error-No data found from server");
        }        
        else {          
          if(counter==0){            
            counter=counter + 1;
          }        
          return throwError("error-No data found from server");
        }
      })
    );    
  }
 
}
