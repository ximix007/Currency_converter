import { Component } from "@angular/core"
import { ExchangeRateAccessor } from "../../api/ExchangeRateAccessor"

@Component({
    selector: "cheader",
    templateUrl: "./header.html"
})

export class Header{
    exchangeRateAccessor = ExchangeRateAccessor.GetExchangeRateAccessor()
    rawRate = [{text: " ", cc: " ", rate: 0}];
    marqueeText = [""];
    
    getRate = () => this.exchangeRateAccessor.getData()
        .then((x: any) => this.rawRate = x.map((x: any) => {return {text: x.txt, cc: x.cc, rate: x.rate}}))
        .then(() => {this.marqueeText = this.rawRate.map(x => " " +x.cc + ': ' + x.rate)})
    
    constructor(){
        this.getRate()
    }

}