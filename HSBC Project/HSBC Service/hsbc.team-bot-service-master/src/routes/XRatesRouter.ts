'use strict';
import {NextFunction, Request, Response, Router} from "express";
var XRatesDao = require('../dao/XRates');

interface ExchangeRate {
    code: string,
    buy: number,
    sell: number
}

interface ExchangeRateInfo {
    from: Currency,
    rates: ExchangeRate[]
}

interface DetailedExchangeRate {
    from: Currency,
    to: Currency,
    buy: number,
    sell: number,
    timestamp: string
}

interface Currency {
    name: string,
    code: string
}

interface CurrencyList {
    currencies: Currency[]
}

interface Conversion {
    from: Currency,
    to: Currency,
    amount: number,
    conversion: number,
}

export class XRatesRouter {

    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    // Returns all exchangeable currencies
    public get(req: Request, res: Response, next: NextFunction) {
        XRatesDao.findAllSupportedCurrencies().then(function(result){

            let payload : CurrencyList = {
                currencies: result
            };

            res.send(payload);
        })
    }

    // Returns rate from given currency to all other ones
    public getFrom(req: Request, res: Response, next: NextFunction) {

        // get code of currency to get rates for
        let currencyCode : string = req.params.from;
        currencyCode = currencyCode.toUpperCase();

        // todo: do work here

        let fromRatePromise = XRatesDao.findFxRateByCode(currencyCode).then(
            rate => {
                if(rate != null) {
                    return rate
                } else throw "Rate does not exist!"
            },
            err => {
                // Something went wrong while trying to read from DB
                console.log(err)
                throw err
            }
        );

        let allRatesPromise = XRatesDao.findAllFxRates();

        Promise.all([fromRatePromise, allRatesPromise]).then(
            values => {
                let fromRate = values[0]
                let allRates = values[1]
                let resultRates : ExchangeRate[] = [];

                allRates.forEach(function(rate) {

                    if(rate.code == fromRate.code){
                        return
                    } else {
                        resultRates.push({
                            code: rate.code,
                            buy: +((rate.buy / fromRate.sell).toFixed(5)),
                            sell: +(1 / (fromRate.buy / rate.sell)).toFixed(5),
                        })
                    }
                });

                let payload : ExchangeRateInfo = {
                    from: {
                        code: currencyCode,
                        name: fromRate.name
                    },
                    rates: resultRates
                };

                res.send(payload);
            },
            err => {
                res.status(500);
                res.send(err);
            }
        )
    };

    // Returns exchange rate from given to target currency
    public getFromTo(req: Request, res: Response, next: NextFunction) {

        // get codes of currencies to get rate from and to
        let fromCurrencyCode : string = req.params.from;
        fromCurrencyCode = fromCurrencyCode.toUpperCase()
        let toCurrencyCode : string = req.params.to;
        toCurrencyCode = toCurrencyCode.toUpperCase()

        // todo: do work here
        let fromRatePromise = XRatesDao.findFxRateByCode(fromCurrencyCode).then(
            rate => {
                if(rate != null) {
                    return rate
                } else throw "Rate does not exist!"
            },
            err => {
                // Something went wrong while trying to read from DB
                console.log(err)
                throw err
            }
        );

        let toRatePromise = XRatesDao.findFxRateByCode(toCurrencyCode).then(
            rate => {
                if(rate != null) {
                    return rate
                } else throw "Rate does not exist!"
            },
            err => {
                // Something went wrong while trying to read from DB
                console.log(err)
                throw err
            }
        );

        Promise.all([fromRatePromise, toRatePromise]).then(
            values => {
                let fromRate = values[0]
                let toRate = values[1]
                let dt = new Date()
                let utcDate = dt.toUTCString()

                let payload : DetailedExchangeRate = {
                    from: {
                        code: fromCurrencyCode,
                        name: fromRate.name
                    },
                    to: {
                        code: toCurrencyCode,
                        name: toRate.name
                    },
                    buy: +(toRate.buy / fromRate.sell).toFixed(5),
                    sell: +(1 / (fromRate.buy / toRate.sell)).toFixed(5),
                    timestamp: utcDate
                };

                res.send(payload);;

            },
            err => {
                res.status(500);
                res.send(err);
            }
        )
    }

    // Returns a conversion of the amount from given to target currency
    // query parameters: from, to, amount
    // e.g. xrates/convert?from=CAD&to=USD&amount=1234
    public convert(req: Request, res: Response, next: NextFunction) {

        // get currency codes and amount
        let fromCurrencyCode : string = req.query.from
        fromCurrencyCode = fromCurrencyCode.toUpperCase()
        let toCurrencyCode : string = req.query.to
        toCurrencyCode = toCurrencyCode.toUpperCase()
        let amount : number = req.query.amount

        if(amount <= 0) {
            res.status(400);
            res.send("Amount must be a positive number");
            return;
        }

        let fromRatePromise = XRatesDao.findFxRateByCode(fromCurrencyCode).then(
            rate => {
                if(rate != null) {
                    return rate
                } else throw "Rate does not exist!"
            },
            err => {
                // Something went wrong while trying to read from DB
                console.log(err)
                throw err
            }
        );

        let toRatePromise = XRatesDao.findFxRateByCode(toCurrencyCode).then(
            rate => {
                if(rate != null) {
                    return rate
                } else throw "Rate does not exist!"
            },
            err => {
                // Something went wrong while trying to read from DB
                console.log(err)
                throw err
            }
        );

        Promise.all([fromRatePromise, toRatePromise]).then(
            values => {
                let fromRate = values[0];
                let toRate = values[1];

                // sample response body
                let payload : Conversion = {
                    from: {
                        code: fromCurrencyCode,
                        name: fromRate.name
                    },
                    to: {
                        code: toCurrencyCode,
                        name: toRate.name
                    },
                    amount: amount,
                    conversion: (amount * (fromRate.buy / toRate.sell))
                };

                res.send(payload);

            },
            err => {
                res.status(500);
                res.send(err);
            }
        )
    }

    private init() {
        // register route functions here
        this.router.get("/", this.get);
        this.router.get("/convert", this.convert);
        this.router.get("/:from", this.getFrom);
        this.router.get("/:from/:to", this.getFromTo);
    }

}

const xRatesRoutes = new XRatesRouter();
export default xRatesRoutes.router;
