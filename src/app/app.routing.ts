import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { HelpComponent } from './help';
import {CheckingAcctComponent} from './checking-acct';
import {SavingsAcctComponent} from './savings-acct';
import {InvestmentAcctComponent} from './investment-acct';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'help', component: HelpComponent},
  { path: 'checking', component: CheckingAcctComponent},
  { path: 'savings', component: SavingsAcctComponent},
  { path: 'investment', component: InvestmentAcctComponent},

  // otherwise redirects to home
  { path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
