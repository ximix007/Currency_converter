import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateAccessorService {
  observable: any;

  constructor(private http: HttpClient) {
    this.observable = this.http.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
  }

  listen(calback: (x: any) => any){
    this.observable.subscribe(calback);
  }
}