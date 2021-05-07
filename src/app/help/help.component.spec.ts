import { HelpComponent } from "./help.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";

describe('HelpComponant', () => {
  let component: HelpComponent;
  let fixture: ComponentFixture<HelpComponent>;

  beforeEach(async () =>{
    await TestBed.configureTestingModule({
      declarations: [ HelpComponent ]
    })
      .compileComponents()
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(HelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',  () => {
    expect(component).toBeTruthy();
  });
});
