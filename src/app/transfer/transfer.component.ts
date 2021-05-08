import { Component, OnInit } from '@angular/core';
import {BmmtService} from '../bmmt.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  accounts: any[];
  accountAction: string;
  accountFrom: string;
  accountTo: string;

  constructor(private accountService: BmmtService) {
    this.getUserAccounts();
  }

  ngOnInit(): void {
  }

  getUserAccounts(): void {
    this.accountService.getAccountByUser(23).subscribe(list => this.accounts = list);
  }

}
