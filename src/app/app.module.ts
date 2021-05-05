import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home';
import { HelpComponent } from './help';
import { LoginComponent } from './login';
import { CheckingAcctComponent } from './checking-acct';
import { SavingsAcctComponent } from './savings-acct';
import { InvestmentAcctComponent } from './investment-acct';

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
    BrowserModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
