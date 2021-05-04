import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingAcctComponent } from './checking-acct.component';

describe('CheckingAcctComponent', () => {
  let component: CheckingAcctComponent;
  let fixture: ComponentFixture<CheckingAcctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckingAcctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingAcctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
