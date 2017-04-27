import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {SignalsService} from "./signals.service";
import {Signal} from "../../abstract/signal";

@Component({
  selector: 'page-home',
  templateUrl: 'signals.html'
})
export class SignalsPage implements  OnInit{
  signals: Signal[] = [];
  errorMessage: string;
  constructor(public navCtrl: NavController,
              private _signalsService: SignalsService) {
  }

  ngOnInit(): void{
    this.activate();
  }

  activate(): void {
    this._signalsService.getSignals()
      .subscribe(signals => this.signals = signals,
       error => this.errorMessage = <any>error);
   // this.signals = this._signalsService.getSignals();
  }

}
