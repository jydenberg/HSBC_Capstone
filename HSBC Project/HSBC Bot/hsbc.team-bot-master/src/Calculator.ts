import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {DefaultApi, HttpBasicAuth} from './hsbc-api';
import {Convo_Components} from './ConversationComponents';
import {Images} from './imageLibrary';
//
const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST + "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);

const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);


export namespace Calculator {

    //input : Req node with proper loanamount, rate, and Duration parameters
    //output: Promise<String> with return value for calc # 1
    export function mortgageCalculatorMonthlyPayment(req: any): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            if (!req.body.result) reject("invalid request");

            let loanAmount = req.body.result.parameters.loanAmount;
            let interestRate = req.body.result.parameters.interestRate;
            let loanDuration = req.body.result.parameters.loanDuration;


            if (Number(loanAmount) < 0) reject ("Amount must be above 0");
            if (Number(interestRate) < 0)reject ("Rate must be above 0");
            if (Number(loanDuration) < 0)reject ("Loan Duration must be above 0");

            let arg = "0001/?amount=" + loanAmount.toString() + "&interestRate=" + interestRate + "&years=" + loanDuration.toString();

            client.calculateProductIdGet("loans", arg).then(result => {
                let pay = result.body.result.toString();
                resolve(pay);

            }).catch(err => {
                resolve(`Error in Calc: ${err}`);
            });

        });

    }

    export function mortgageCalculatorRemainingPayment(req: any): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            if (!req.body.result) reject("invalid request");

            let params = req.body.result.parameters;
            let loanAmount = params.loanAmount;
            let interestRate = params.interestRate;
            let loanDuration = params.loanDuration;
            let numberPayments = params.numberPayments;

            if (Number(loanAmount) < 0) reject ("Amount must be above 0");
            if (Number(interestRate) < 0)reject ("Rate must be above 0");
            if (Number(loanDuration) < 0)reject ("Loan Duration must be above 0");
            if (Number(numberPayments) < 0) reject ("Nummber Payments must be above 0");
            if (Number (numberPayments) > ((Number(loanDuration)) * 12)) reject("More payments then months in duration");
            let arg = "0002/?amount=" + loanAmount.toString() + "&interestRate=" + interestRate.toString() + "&years=" + loanDuration.toString() + "&monthsRemaining=" + numberPayments.toString();

            client.calculateProductIdGet("loans", arg).then(result => {
                let pay = result.body.result;
                let retval : string = pay.toString();
                resolve(retval);

            }).catch(err => {
                resolve("Error in Calc 2 :" + err);
            });

        });

    }


}
