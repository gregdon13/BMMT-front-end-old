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
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    InvestmentAcctComponent,
  ],
    imports: [
        BrowserModule,
        appRoutingModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
