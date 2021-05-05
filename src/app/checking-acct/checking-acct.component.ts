import { Component, OnInit} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BmmtService } from '../bmmt.service';
import {MoneyAccount} from '../models/moneyaccount';

@Component({
   selector: 'app-checking-acct',
  templateUrl: './checking-acct.component.html',
   styleUrls: ['./checking-acct.component.css']
})
export class CheckingAcctComponent implements OnInit{
  accountObj: MoneyAccount;
  accountNum: number;
  accountBalance: number;
  accountsArr: MoneyAccount[];


  constructor(private accountService: BmmtService) {
    this.accountObj = new MoneyAccount();
    this.accountBalance = this.getBalance(123456789);
  }

  ngOnInit(): void {
  }

  getBalance(accountNumber): number {
    console.log(this.accountObj);
    this.accountService.getAccountByNumber(accountNumber).subscribe(account => this.accountObj = account);
    console.log(this.accountObj);
    this.accountBalance = this.accountObj.BALANCE;
    return this.accountBalance;
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
