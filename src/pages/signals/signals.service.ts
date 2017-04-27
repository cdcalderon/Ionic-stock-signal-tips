import { Http, Response } from '@angular/http';
import {Signal} from "../../abstract/signal";
import {Injectable} from "@angular/core";
import 'rxjs';
import {Observable} from "rxjs/Observable";


@Injectable()
export class SignalsService {

  private signals: Signal[] = [];
  private signalsUrl = 'http://localhost:4000/signals';

  constructor(private http: Http){}

  getSignals(): Observable<Signal[]>{

    return this.http.get(`${this.signalsUrl}`)
      .map((response: Response) => {
        this.signals = response.json();
        return this.signals;
      });
    // return [
    //   {
    //     id: 'aapl',
    //     date: '04/07/2017',
    //     type: '3-Arrow'
    //   },
    //   {
    //     id: 'msft',
    //     date: '05/07/2016',
    //     type: 'Gap'
    //   },
    //   {
    //     id: 'ibm',
    //     date: '02/07/2017',
    //     type: '3-Arrow'
    //   }
    // ]
  }
}
