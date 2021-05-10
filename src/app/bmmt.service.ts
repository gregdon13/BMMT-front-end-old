import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transaction} from './models/transaction';
import {MoneyAccount} from './models/moneyaccount';
import { map } from 'rxjs/operators';
import {UserProfileComponent} from "./user-profile/user-profile.component";


@Injectable({
  providedIn: 'root'
})
export class BmmtService {

  public account = [];
  singleAccount: MoneyAccount;
  public faq = [];

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

  createNewTransaction(transaction: Transaction): Observable<any> {
    const body = JSON.stringify(transaction);
    return this.http.post(`${this.mainUrl}/transaction`, body);
  }


  // account methods

  userSingleAccount(userId: number, accountName: string): Observable<any> {
    return this.http.get(`${this.mainUrl}/account/user/${userId}/${accountName}`);
  }

  createAccount(moneyAccount: MoneyAccount): Observable<any> {
    const body = JSON.stringify(moneyAccount);
    return this.http.post(`${this.mainUrl}/account`, body);
  }

  getAllAccounts(): Observable<any> {
    return this.http.get(`${this.mainUrl}/account/all`);
  }

  getAccountByNumber(accountNumber): Observable<any> {
    return this.http.get(`${this.mainUrl}/account/number/${accountNumber}`);
  }

  getAccountByUser(userId): Observable<any> {
    return this.http.get(`${this.mainUrl}/account/user/${userId}`);
  }

  depositFunds(amount, accountNumber): Observable<any> {
    return this.http.put(`${this.mainUrl}/account/deposit/${accountNumber}`, amount);
  }

  withdrawFunds(amount, accountNumber): Observable<any> {
    return this.http.put(`${this.mainUrl}/account/withdraw/${accountNumber}/${amount}`, this.singleAccount);
  }

  transferFunds(amount, accountOne, accountTwo): Observable<any> {
    return this.http.put(`${this.mainUrl}/account/transfer/${accountOne}/${accountTwo}`, amount);
  }

  deleteAccount(accountNumber): Observable<any> {
    return this.http.delete(`${this.mainUrl}/delete/${accountNumber}`);
  }

  //FAQ methods

  getAllFAQs(): Observable<any> {
    return this.http.get(`${this.mainUrl}/faq/all`)
  }

  getFAQById(ID: number): Observable<any> {
    return this.http.get(`${this.mainUrl}/faq/${ID}`);
  }

  //user methods

  //create user
  createUserProfile(userProfile: UserProfileComponent): Observable<any> {
    const body = JSON.stringify(userProfile);
    return this.http.post(`${this.mainUrl}/user`, body);
  }
  //get user
  getUserProfile(): Observable<any> {
    return this.http.get(`${this.mainUrl}/user`);
  }
  //update user

  //delete user
  deleteUserProfile(userProfile): Observable<any> {
    return this.http.delete(`${this.mainUrl}/user/id`);
  }
}
