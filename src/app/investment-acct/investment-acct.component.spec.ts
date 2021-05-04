import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentAcctComponent } from './investment-acct.component';

describe('InvestmentAcctComponent', () => {
  let component: InvestmentAcctComponent;
  let fixture: ComponentFixture<InvestmentAcctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentAcctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentAcctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
