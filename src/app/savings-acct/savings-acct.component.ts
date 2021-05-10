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
  transactions: any[];
  limit = 5;

  constructor(private accountService: BmmtService) {
    this.getSavingsBalance();
    this.getSavingsNumber();
    this.getSavingsTransactions();
  }

  ngOnInit(): void {
  }

  getSavingsBalance(): void {
    this.accountService.userSingleAccount(23, 'SAVINGS')
      .subscribe(account => this.accountBalance = account.balance);
  }

  getSavingsNumber(): void {
    this.accountService.userSingleAccount(23, 'SAVINGS')
      .subscribe(account => this.accountNum = account.accountNumber % 1000);
  }

  returnSavingsNumber(): number {
    let accNum: number;
    this.accountService.userSingleAccount(23, 'SAVINGS')
      .subscribe(account => accNum = account.accountNumber);
    return accNum;
  }

  getSavingsTransactions(): void {
    this.accountService.findAccountTransactions(123456789)
      .subscribe(list => this.transactions = list);
  }

  showMoreItems(): void {
    if (this.limit < 25) {
      this.limit += 5;
    }
  }

  showLessItems(): void {
    if (this.limit > 5){
      this.limit -= 5;
    }
  }

}
