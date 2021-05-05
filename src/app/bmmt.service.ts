import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CheckingAcctComponent} from './checking-acct';
import {Transaction} from './models/transaction';

@Injectable({
  providedIn: 'root'
})
export class BmmtService {

  private readonly mainUrl: string;

  constructor(private http: HttpClient) {
    this.mainUrl = 'http://localhost:8080';
  }

  // transaction methods
  findAllTransactions(): Observable<any> {
    return this.http.get(`${this.mainUrl}/transaction/all`);
  }

  findUserTransactions(userId): Observable<any> {
    return this.http.get(`${this.mainUrl}/transaction/user/${userId}`);
  }

  findAccountTransactions(accountNumber): Observable<any> {
    return this.http.get(`${this.mainUrl}/transaction/account/${accountNumber}`);
  }
}
