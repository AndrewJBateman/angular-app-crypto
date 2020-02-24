# Angular App Crypto

* App to get crypto currency price data from a [CryptoCompare](https://min-api.cryptocompare.com/) API.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Angular httpClient used to get API data.
* Data displayed using one-way data-binding and an *ngFor loop.
* Separate data.service.ts file used to get API price data. This data is subscribed to in app.component.ts

## Screenshots

![Example screenshot](./img/crypto-euro.png).

## Technologies

* [Angular v9.0.2](https://angular.io/)
* [RxJS Library v6.5.4](https://angular.io/guide/rx-library) used to [subscribe](http://reactivex.io/documentation/operators/subscribe.html) to the API data [observable](http://reactivex.io/documentation/observable.html).

## Setup

* Install dependencies using `npm i`.
* You may need to change one dependency version so it will work - 'npm i @angular-devkit/build-angular@0.803.24'.
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Examples

* `data.service.ts` using httpClient service with a `getPrices()` function to get crypto currency details from the API.

```typescript

@Injectable()
export class DataService {
  result:       any;
  currencyCode: string;
  display:      string;

  constructor(private http: HttpClient) {}

  // function to get crypto prices in euro from the API - no API key required.
  getPrices() {
		const fsymsList = 'BTC,XRP,BCH,ETH,ZEC,EOS,XMR,ETC,LTC,DASH,QTUM,NEO,XLM,TRX,ADA,BTS,USDT,XUC,PAX,IOT';
    return this.http
      .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + fsymsList + '&tsyms=EUR')
			.pipe(map(
        result => this.result = result
      ));
  }
}
```

## Features

* Angular httpClient used to get data from an external API.
* [Angular currency pipe](https://angular.io/api/common/CurrencyPipe) & [rxjs map operator](https://angular.io/guide/rx-library) used to extract currency data and display it to the correct format.
* Updated to the latest version of Angular 9.
* Dependencies updated with 0 dependency vulnerabilities. Note version typescript@3.7.5 used (not the latest).

## Status & To-Do List

* Status: Working.
* To-Do: add mat-cards and colours to improve UI. Upgrade ng.

## Inspiration

* [Angular CryptoCurrency Tutorial - Display Exchange Data with an API](https://www.youtube.com/watch?v=U3INaC0leXg&t=589s)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
