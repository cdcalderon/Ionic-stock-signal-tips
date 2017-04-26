import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {NavParams} from "ionic-angular";
import {SignalsService} from "./signals.service";
import {Signal} from "../../abstract/signal";

@Component({
  selector: 'page-home',
  templateUrl: 'signals.html'
})
export class SignalsPage implements  OnInit{
  signals: Signal[] = [];
  constructor(public navCtrl: NavController,
              private _signalsService: SignalsService) {
  }

  ngOnInit(): void{
    this.activate();
  }

  activate(): void {
    this.signals = this._signalsService.getSignals();
  }

}
