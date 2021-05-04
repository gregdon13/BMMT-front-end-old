import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsAcctComponent } from './savings-acct.component';

describe('SavingsAcctComponent', () => {
  let component: SavingsAcctComponent;
  let fixture: ComponentFixture<SavingsAcctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsAcctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsAcctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
