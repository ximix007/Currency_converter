export class ExchangeRateAccessor{
    static instance: ExchangeRateAccessor
    dataPromice = fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
    .then((response) => {
        return response.json();
    })

    async getData(){
        return await this.dataPromice;
    }

    constructor(){
        this.getData();
        console.log("data load")
    }

    static GetExchangeRateAccessor(){
        if(this.instance == undefined)
            this.instance = new ExchangeRateAccessor;
        return this.instance;
    }
}