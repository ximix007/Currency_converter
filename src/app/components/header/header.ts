import { Component } from "@angular/core"
import { ExchangeRateAccessorService } from "../../services/exchange-rate-accessor.service"

@Component({
  selector: "cheader",
  templateUrl: "./header.html"
})
export class Header{
  rawRate = [{text: " ", cc: " ", rate: 0}];
  marqueeText = [""];
  
  extractRate = (x: any) => {
    this.rawRate = x.map((x: any) => {return {text: x.txt, cc: x.cc, rate: x.rate}})
    this.marqueeText = this.rawRate.map(x => " " + x.cc + ': ' + x.rate)
  }

  constructor(private rateProvider: ExchangeRateAccessorService){
    this.rateProvider.listen(this.extractRate)

    this.extractRate = this.extractRate.bind(this)
  }
}