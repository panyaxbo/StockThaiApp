import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

import {FormsModule } from '@angular/forms';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { MainComponent } from './components/main/main.component';
import { MainDetailComponent } from './components/main-detail/main-detail.component';
import { NewsComponent } from './components/news/news.component';
import { ApiComponent } from './components/api/api.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { EconomicComponent } from './components/economic/economic.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'main', component: MainComponent, children: [
    { path: '', component: MainDetailComponent, outlet: 'main-detail'},
    { path: 'news', component: NewsComponent, outlet: 'main-detail'},
    { path: 'currency', component: CurrencyComponent, outlet: 'main-detail'},
    { path: 'economic', component: EconomicComponent, outlet: 'main-detail'},
    { path: 'api', component: ApiComponent, outlet: 'main-detail'}
  ]}
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainDetailComponent,
    NewsComponent,
    ApiComponent,
    SignupComponent,
    LoginComponent,
    ForgetPasswordComponent,
    CurrencyComponent,
    EconomicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoundProgressModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
