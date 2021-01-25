import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusrouteComponent } from './components/busroute/busroute.component';
import { BusdetailsComponent } from './components/busdetails/busdetails.component';
import { DataService } from './services/data.service';
import { FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './state/store';
import { EffectsModule } from '@ngrx/effects';
import { BusEffects } from './state/effects';
import { StatusPipe } from './shared/statuspipe';
import { RoutePipe } from './shared/routepipe';
import { LoaderService } from './shared/loader.service';
import { GlobalErrorHandler } from './shared/errorhandler/global-error-handlers';
import { ServerErrorInterceptor } from './shared/errorhandler/server-error.interceptor';
import { LoaderInterceptor } from './shared/loader-interceptor.service';
import { MaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,  
    BusrouteComponent,
    BusdetailsComponent,
    StatusPipe,
    RoutePipe
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,    
    HttpClientModule,
    MaterialModule,
    NgReduxModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    EffectsModule.forRoot([BusEffects]),
    StoreModule.forRoot({}, {})
  ],
  providers: [DataService, { provide: ErrorHandler, useClass: GlobalErrorHandler },
     { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
    LoaderService, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
  constructor (ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
}
}
