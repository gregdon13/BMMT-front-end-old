import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CheckingAcctComponent} from './checking-acct';
import {Transaction} from './models/transaction';

@Injectable({
  providedIn: 'root'
})
export class BmmtService {

  private mainUrl: string;

  constructor(private http: HttpClient) {
    this.mainUrl = 'http://localhost:8080/';
  }

  // transaction methods
  public findAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.mainUrl + 'transaction/all');
  }
}
