import {Signal} from "../../abstract/signal";

export class SignalsService {

  private signals: Signal[] = [];

  getSignals() : Signal[]{
    return [
      {
        id: 'aapl',
        date: '04/07/2017',
        type: '3-Arrow'
      },
      {
        id: 'msft',
        date: '05/07/2016',
        type: 'Gap'
      },
      {
        id: 'ibm',
        date: '02/07/2017',
        type: '3-Arrow'
      }
    ]
  }
}
