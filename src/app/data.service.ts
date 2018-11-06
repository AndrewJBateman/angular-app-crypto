import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
	// tslint:disable-next-line:indent
	result: 			any;
	currencyCode:	string;
	display:			string;

  constructor(private _http: HttpClient) {}

  getPrices() {
// tslint:disable-next-line:indent
		const fsymsList = 'BTC,XRP,BCH,ETH,ZEC,EOS,XMR,ETC,LTC,DASH,QTUM,NEO,XLM,TRX,ADA,BTS,USDT,XUC,PAX,IOT';
    return this._http
      .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + fsymsList + '&tsyms=USD')
			.pipe(map(result => (this.result = result)));

	}
}
