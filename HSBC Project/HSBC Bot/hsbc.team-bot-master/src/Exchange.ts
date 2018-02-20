import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {DefaultApi, HttpBasicAuth} from './hsbc-api';
import {Convo_Components} from './ConversationComponents';

const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST + "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);

const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);

export namespace Exchange {

    //input : Currency you want the list of exchanges for, or blank for all
    //output: lPromise response of currencies

    export function findExchangeRate(req: any): Promise<string> {
        //     console.log(req.body);
        if (!req.body) return exchangeHelperAll(req); // Check invalid Paramgit

        //try/catch just in case there is no currency_from parameter
        //if there is no parameter it means we want it ALLLLL
        if (req.body.result.hasOwnProperty('parameters')) {
            if (req.body.result.parameters.hasOwnProperty('currency_from')) {

                if (req.body.result.parameters.currency_from == "") {
                    return exchangeHelperAll(req);
                }

                if (req.body.result.parameters.currency_from) {
                    return exchangeHelperFrom(req);
                }


            }
        }

        else {
            return exchangeHelperAll(req);
        }


    }


    export function exchangeHelperAll(req: any): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            if (!req.body.result) reject("invalid request");
            let currency_from = "CAD";

            client.xratesFromGet(currency_from).then(result => {

                let rateinfo = result.body.rates;
                let Rarray = [];
                Rarray.push("\nFrom Currency " + currency_from + ", the rates are ");
                for (let i = 0; i < rateinfo.length; i++) {
                    let exchinfo = rateinfo[i];
                    let bprice = exchinfo.buy, sprice = exchinfo.sell, fromcode = exchinfo.code;
                    let str1 = ("Currency Code: " + fromcode.toString() + " , Buy price: " +  bprice.toString() + ", Sell Price: " + sprice.toString());
                    Rarray.push(str1);
                }

                let answer = Rarray.join('\n');
                resolve(answer);

            }).catch(err => { // catch for promise loop
                resolve(err);
            });
        });
    }



    export function exchangeHelperFrom(req: any): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            if (!req.body.result) reject("invalid request");
            let currency_from = req.body.result.parameters.currency_from;
            if (currency_from == "" || currency_from == undefined) currency_from = "CAD";
            client.xratesFromGet(currency_from).then(result => {

                let rateinfo = result.body.rates;
                let Rarray = [];
                Rarray.push("\nFrom Currency " + currency_from + " the rates are, \n")
                for (let i = 0; i < rateinfo.length; i++) {
                    let exchinfo = rateinfo[i];
                    console.log("exchinfo: " + exchinfo);
                    let bprice: string = exchinfo.buy.toFixed(3);
                    let sprice: string = exchinfo.sell.toFixed(3);
                    let fromcode = exchinfo.code;
                    let str1 = " , Buy price: "+  bprice;
                    let str2 = " , Sell Price: " + sprice;
                    let str3 = "Currency Code: " + fromcode.toString();

                    Rarray.push(str3);
                    Rarray.push(str2);
                    Rarray.push(str1);
                    Rarray.push('\n');
                }

                let answer = Rarray.join();
                resolve(answer);

            }).catch(err => { // catch for promise loop
                resolve(err);
            });
        });
    }

    export function searchWhatExchangeRate(req: any): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            if (!req.body.result) reject("invalid request");

            let currency_from = req.body.result.parameters.currency_from;
            let currency_into = req.body.result.parameters.currency_into;
            let amount = req.body.result.parameters.amount;
            if (Number(amount) < 0) reject ("amount must be greater then 0");
            if (currency_from == "") {// in the case of no from input, assume Canadian
                currency_from = "CAD";
            }

            if (amount == "") { // case where no amount is given
                client.xratesFromToGet(currency_from,currency_into).then(result => {
                    let Rarray =[];
                    let bprice = result.body.buy;
                    let sprice = result.body.sell;

                    let str0 = "\n For " + currency_from + " to " + currency_into + ", \nthe buy rate is " + bprice.toString();
                    let answer = str0 + ".\n the sell rate is " + sprice.toString() + ".";



                    resolve(answer);

                });
            }
            else { // case where amount is given

                if (Number(amount) < 0) reject ("Amount must be above 0");

                client.xratesConvertGet(currency_from,currency_into,amount).then(result => {

                    let retnum : number = result.body.conversion;
                    let resultstring = retnum.toFixed(2);

                    resolve(`\nThe converted amount is ` + resultstring + " " + currency_into );

                }).catch(err => {
                    resolve(err);

                });
            }
        });
    }

    function ratehelper (cur: any) : Promise<any> { // do the data adding here then use prom.all with answers inside then? adress+shortname
        return new Promise(function (fulfill, reject) {
            //console.log(cur);
            client.xratesFromGet(cur).then(result => {
                //console.log(result.body.rates);
                let Parray = [];
                let j;
                let len2 = result.body.rates.length;
                for (j = 0; j < len2; j++) {
                    let str0 = "for " + cur;
                    let str1 = str0.concat(" to ", result.body.rates[j].code," rate for buy is ", result.body.rates[j].buy.toFixed(2));
                    let str2 = str0.concat(" ,sell rate is ", result.body.rates[j].sell.toFixed(2));
                    Parray.push(str1);
                    Parray.push(str2);
                }
                //console.log(Parray);
                fulfill(Parray);
            }).catch(err => {
                let Reject = [];
                fulfill(Reject);
            })
        })
    }



}