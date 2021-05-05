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


  constructor(header: HeaderComponent, accountService: BmmtService) {
    this.headerComp = header;
    this.accountService = accountService;
    this.headerComp.setHeader('CHECKING ACCOUNT');
  }

  ngOnInit(): void {
  }

  getBalance(accountNumber): void {
    this.accountService.getAccountByNumber(accountNumber).subscribe(account => this.accountObj = account);
    this.accountBalance = this.accountObj.BALANCE;
  }

  getNumber(accountName, userId): void {
    this.accountService.getAccountByUser(userId).subscribe(accounts => this.accountsArr = accounts);
    for (let i = 0; i < this.accountsArr.length; i++) {
      if (this.accountsArr[i].ACCOUNT_TYPE === 'Checking') {
        this.accountNum = this.accountsArr[i].ACCOUNT_NUMBER;
      }
    }
  }

}
