import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {SignalsPage} from "../signals/signals";
import {StockQuotePage} from "../stock-quote/stock-quote";

/**
 * Generated class for the Tabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  homePage = SignalsPage;
  stockQuotePage = StockQuotePage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
