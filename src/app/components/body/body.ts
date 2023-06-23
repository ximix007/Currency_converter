import { Component } from "@angular/core"
import { ExchangeRateAccessor } from "../../api/ExchangeRateAccessor"

@Component({
    selector: "cbody",
    templateUrl: "./body.html"
})

export class Body{
    leftCurrencyCount = 0;
    rightCurrencyCount = 0;

    exchangeRateAccessor = ExchangeRateAccessor.GetExchangeRateAccessor()
    rightExchangeRate = 1;
    leftExchangeRate = 1;

    Rates = [{text: "Гривня", cc: "UAH", rate: 1}];

    getRate = () => this.exchangeRateAccessor.getData()
        .then((x: any) => {this.Rates = this.Rates.concat(x.map(
            (x: any) => {return {text: x.txt, cc: x.cc, rate: x.rate}})); 
    console.log(this.Rates);})

    constructor(){
        this.getRate();
    }

    onLeftNumberChange = (e: any) => {this.leftCurrencyCount = e.target.value;
        this.RightCurrencyUpdate()}
    onLeftCurrencyChange = (e: any) => {this.leftExchangeRate = 
        this.Rates.find((x: any) => e.target.value == x.cc)?.rate ?? 1;
        this.LeftCurrencyUpdate()}
    LeftCurrencyUpdate = () => 
        this.leftCurrencyCount = this.rightCurrencyCount * this.rightExchangeRate / this.leftExchangeRate;

    RightCurrencyUpdate = () => 
        this.rightCurrencyCount = this.leftCurrencyCount / this.rightExchangeRate * this.leftExchangeRate;
    onRightNumberChange = (e: any) => {this.rightCurrencyCount = e.target.value;
        this.LeftCurrencyUpdate()}
    onRightCurrencyChange = (e: any) => {this.rightExchangeRate = 
        this.Rates.find((x: any) => e.target.value == x.cc)?.rate ?? 1;
        this.RightCurrencyUpdate()}
}