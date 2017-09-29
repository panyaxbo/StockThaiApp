import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { environment } from '../environments/environment';
import { MomentModule } from 'angular2-moment';
import { AppComponent } from './app.component';

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
import * as firebase from 'firebase';

// import Services
import { EconomicService } from './services/economic.service';
import { StockService } from './services/stock.service';
import { CurrencyService } from './services/currency.service';
import { NewsService } from './services/news.service';
import { UserService } from './services/user.service';
import { ApiService } from './services/api.service';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'main', component: MainComponent, children: [
    { path: '', redirectTo: 'main-detail', pathMatch: 'full' },
    { path: 'main-detail', component: MainDetailComponent, outlet: 'main-detail'},
    { path: 'news', component: NewsComponent, outlet: 'main-detail'},
    { path: 'currency', component: CurrencyComponent, outlet: 'main-detail'},
    { path: 'economic', component: EconomicComponent, outlet: 'main-detail'},
    { path: 'api', component: ApiComponent, canActivate: [AuthGuard], outlet: 'main-detail'}
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
    HttpModule,
    MomentModule,
    RoundProgressModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, NewsService, CurrencyService, EconomicService,
    StockService, ApiService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
