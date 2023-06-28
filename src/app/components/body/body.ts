import { Component } from "@angular/core"
import { ExchangeRateAccessorService } from '../../services/exchange-rate-accessor.service';

@Component({
  selector: "cbody",
  templateUrl: "./body.html"
})
export class Body{
  leftCurrencyCount = 0;
  rightCurrencyCount = 0;

  rightExchangeRate = 1;
  leftExchangeRate = 1;

  Rates = [{text: "Гривня", cc: "UAH", rate: 1}];

  getRate = (x: any) => {this.Rates = this.Rates.concat(x.map(
      (x: any) => {return {text: x.txt, cc: x.cc, rate: x.rate}}))}

  constructor(private rateProvider: ExchangeRateAccessorService){
    this.rateProvider.listen(this.getRate);
  }

  onLeftNumberChange = (e: any) => {this.leftCurrencyCount = e.target.value;
    this.rightCurrencyUpdate()}
  onLeftCurrencyChange = (e: any) => {this.leftExchangeRate = 
    this.Rates.find((x: any) => e.target.value == x.cc)?.rate ?? 1;
    this.leftCurrencyUpdate()}
  leftCurrencyUpdate = () => 
    this.leftCurrencyCount = this.rightCurrencyCount * this.rightExchangeRate / this.leftExchangeRate;

  rightCurrencyUpdate = () => 
    this.rightCurrencyCount = this.leftCurrencyCount / this.rightExchangeRate * this.leftExchangeRate;
  onRightNumberChange = (e: any) => {this.rightCurrencyCount = e.target.value;
    this.leftCurrencyUpdate()}
  onRightCurrencyChange = (e: any) => {this.rightExchangeRate = 
    this.Rates.find((x: any) => e.target.value == x.cc)?.rate ?? 1;
    this.rightCurrencyUpdate()}
}