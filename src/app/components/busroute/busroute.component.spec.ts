import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BusrouteComponent } from './busroute.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from '../../services/data.service';
import { MaterialModule } from '../../material-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StatusPipe } from '../../shared/statuspipe';
import { NgReduxModule } from '@angular-redux/store';
import {MockNgRedux, NgReduxTestingModule} from '@angular-redux/store/testing';

describe('BusrouteComponent', () => {
  let component: BusrouteComponent;
  let fixture: ComponentFixture<BusrouteComponent>; 
  let el: HTMLElement;
    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusrouteComponent ],
      imports:[
        ReactiveFormsModule,HttpClientTestingModule,
        StoreModule.forRoot({}),MaterialModule,BrowserAnimationsModule,
        NgReduxModule,NgReduxTestingModule
      ],
      providers:[
        {
          provide: DataService
        },
        MockNgRedux
      ]
    })        
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set onSave method',async()=>{
    fixture.detectChanges();
    spyOn(component,'onSave');    
    expect(component.onSave).toHaveBeenCalledTimes(0);
  });

  it('get bus routes details', () => {
      // set up
      spyOn(MockNgRedux.getInstance(), 'getState').and.returnValue({here: 'be my mock store'});
      spyOn(MockNgRedux.getInstance(), 'dispatch').and.stub();      
      expect(MockNgRedux.getInstance().dispatch).toHaveBeenCalledTimes(0);
  });
});

describe('StatusPipe', () => {  
  const pipe = new StatusPipe();

  it('Gives status value - On time', () => {
    expect(pipe.transform('150')).toBe('On time');
  });

  it('Gives status value - Late', () => {
    expect(pipe.transform('350')).toBe('Late');
  });
  
  it('Gives status value - Early', () => {
    expect(pipe.transform('-150')).toBe('Early');
  });
});
 