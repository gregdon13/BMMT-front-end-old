import { Component, OnInit} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BmmtService } from '../bmmt.service';
import {MoneyAccount} from '../models/moneyaccount';
import {Transaction} from '../models/transaction';



@Component({
   selector: 'app-checking-acct',
  templateUrl: './checking-acct.component.html',
   styleUrls: ['./checking-acct.component.css']
})
export class CheckingAcctComponent implements OnInit{
  accountNum: number;
  accountBalance: number;
  accountsArr: MoneyAccount[];
  transactions: any[];


  constructor(private accountService: BmmtService) {
    this.getCheckingBalance();
    this.getCheckingNumber();
    this.getCheckingTransactions();
    console.log(this.accountBalance);
  }


  ngOnInit(): void {
  }

  getCheckingBalance(): void {
    this.accountService.userSingleAccount(23, 'Checking').then(r => this.accountBalance = r.balance);
    // .subscribe(account => this.accountBalance = account.balance)
  }

  getCheckingNumber(): void {
    this.accountService.userSingleAccount(23, 'Checking');
    // .subscribe(account =>
    //     this.accountNum = account.accountNumber)
  }

  getCheckingTransactions(): void {
    this.accountService.findAccountTransactions(987654321).subscribe(list => this.transactions = list);
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
