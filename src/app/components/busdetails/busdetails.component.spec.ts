import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BusdetailsComponent } from './busdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../../material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgReduxModule } from '@angular-redux/store';
import { DataService } from '../../services/data.service';

describe('BusdetailsComponent', () => {
  let component: BusdetailsComponent;
  let fixture: ComponentFixture<BusdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusdetailsComponent ],
      imports:[
        ReactiveFormsModule,HttpClientTestingModule,
        StoreModule.forRoot({}),MaterialModule,BrowserAnimationsModule,
        NgReduxModule
      ],
      providers:[
        {
          provide: DataService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
