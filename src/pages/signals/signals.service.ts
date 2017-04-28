import { Http, Response, URLSearchParams } from '@angular/http';
import {Signal} from "../../abstract/signal";
import {Injectable} from "@angular/core";
import 'rxjs';
import {Observable} from "rxjs/Observable";


@Injectable()
export class SignalsService {

  private signals: Signal[] = [];
  private signalsUrl = 'http://localhost:4000/signals';

  constructor(private http: Http){}

  getSignals(from: string, to: string, symbol: string): Observable<Signal[]>{
    let params = new URLSearchParams();
    params.set('to', to);
    params.set('from', from);
    params.set('symbol', symbol);

    return this.http.get(`${this.signalsUrl}`,  { search: params })
      .map((response: Response) => {
        this.signals = response.json();
        return this.signals;
      });

  }
}
