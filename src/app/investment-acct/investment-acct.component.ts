import { Component, OnInit } from '@angular/core';
import {BmmtService} from '../bmmt.service';

@Component({
  selector: 'app-investment-acct',
  templateUrl: './investment-acct.component.html',
  styleUrls: ['./investment-acct.component.css']
})
export class InvestmentAcctComponent implements OnInit {
  accountNum: number;
  accountBalance: number;
  transactions: any[];
  limit = 5;

  constructor(private accountService: BmmtService) {
    this.getInvestmentBalance();
    this.getInvestmentNumber();
    this.getInvestmentTransactions();
  }

  ngOnInit(): void {
  }

  private getInvestmentBalance(): void {
    this.accountService.userSingleAccount(23, 'INVESTMENT')
      .subscribe(account => this.accountBalance = account.balance);
  }

  private getInvestmentNumber(): void {
    this.accountService.userSingleAccount(23, 'INVESTMENT')
      .subscribe(account =>
        this.accountNum = account.accountNumber % 1000);
  }

  private getInvestmentTransactions(): void {
    this.accountService.findAccountTransactions(456123789)
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
