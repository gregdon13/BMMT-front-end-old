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
import { TransferComponent } from './transfer';
import {AlertModule} from "ngx-bootstrap/alert";
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from "@angular/material/button";
import { UserProfileComponent } from "./user-profile/user-profile.component";


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
    TransferComponent,
    UserProfileComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    appRoutingModule,
    FormsModule,
    HttpClientModule,
    AlertModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
