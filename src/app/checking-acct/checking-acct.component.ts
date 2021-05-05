import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BmmtService } from '../bmmt.service';
import {MoneyAccount} from '../models/moneyaccount';

@Component({
  selector: 'app-checking-acct',
  templateUrl: './checking-acct.component.html',
  styleUrls: ['./checking-acct.component.css']
})
export class CheckingAcctComponent implements OnInit {
  headerComp: HeaderComponent;
  accountService: BmmtService;
  accountObj: MoneyAccount;
  accountNum: number;
  accountBalance: number;
  accountsArr: MoneyAccount[];


  constructor() {
  }

  ngOnInit(): void {
    this.headerComp.setHeader('CHECKING ACCOUNT');
  }

  getBalance(accountNumber): void {
    this.accountService.getAccountByNumber(accountNumber).subscribe(account => this.accountObj = account);
    this.accountBalance = this.accountObj.BALANCE;
  }

  getNumber(accountName, userId): void {
    this.accountService.getAccountByUser(userId).subscribe(accounts => this.accountsArr = accounts);
    for (const val of this.accountsArr) {
        if (val.ACCOUNT_TYPE === 'Checking') {
          this.accountNum = val.ACCOUNT_NUMBER;
      }
    }
  }

}
