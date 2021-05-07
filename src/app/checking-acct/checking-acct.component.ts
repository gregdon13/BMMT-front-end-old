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
    this.getCheckingBalance();
    this.getCheckingNumber();
  }


  ngOnInit(): void {
  }

  getCheckingBalance(): void {
    this.accountService.userSingleAccount(23, 'Checking').subscribe(account => this.accountBalance = account.balance);
  }

  getCheckingNumber(): void {
    this.accountService.userSingleAccount(23, 'Checking').subscribe(account =>
    this.accountNum = account.accountNumber);
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
