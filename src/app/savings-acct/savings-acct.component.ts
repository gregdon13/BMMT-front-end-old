import { Component, OnInit } from '@angular/core';
import { BmmtService } from '../bmmt.service';
import { MoneyAccount } from '../models/moneyaccount';

@Component({
  selector: 'app-savings-acct',
  templateUrl: './savings-acct.component.html',
  styleUrls: ['./savings-acct.component.css']
})
export class SavingsAcctComponent implements OnInit {
  accountNum; number;
  accountBalance: number;
  accountObj: MoneyAccount;

  constructor() { }

  ngOnInit(): void {
  }

}
