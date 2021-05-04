import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from "./home";
import { HelpComponent } from "./help";
import {LoginComponent} from "./login";
import { CheckingAcctComponent } from './checking-acct/checking-acct.component';
import { SavingsAcctComponent } from './savings-acct/savings-acct.component';
import { InvestmentAcctComponent } from './investment-acct/investment-acct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    HelpComponent,
    CheckingAcctComponent,
    SavingsAcctComponent,
    InvestmentAcctComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
