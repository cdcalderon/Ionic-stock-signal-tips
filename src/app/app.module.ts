import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {StockQuotePage} from "../pages/stock-quote/stock-quote";
import {TabsPage} from "../pages/tabs/tabs";
import {SignalsPage} from "../pages/signals/signals";
import {SignalsService} from "../pages/signals/signals.service";

@NgModule({
  declarations: [
    MyApp,
    SignalsPage,
    StockQuotePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignalsPage,
    StockQuotePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SignalsService
  ]
})
export class AppModule {}
