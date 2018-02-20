import {FulfillmentResponse} from './contracts';
import {Convo_Components} from './ConversationComponents';
import {Content} from './contentObject';
import {Calculator} from './Calculator';
import {DefaultApi, HttpBasicAuth} from './hsbc-api';


const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST + "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);

const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);

const rejectMessage = "I'm sorry, that was an invalid request";


export namespace MortFunc {
    //CALCULATE FUNCTIONS
    export function handleCalculateMortgageMonthly(req): Promise<FulfillmentResponse>{
        return new Promise((resolve, reject) => {
            if (!req.body.result) {
                reject(rejectMessage);
            }
            let result: Promise<FulfillmentResponse>;
            Calculator.mortgageCalculatorMonthlyPayment(req).then(monthly => {
                let returnResponse = Content.calculateMortgageMonthly.simpleResponse + monthly;
                result = Convo_Components.createUtterance(req, returnResponse);
                resolve(result);
            }).catch(err => {
                result = Convo_Components.createUtterance(req, err);
                resolve(result);
            })
        })
    }
    export function handleCalculateRemaining(req) : Promise<FulfillmentResponse>{
        return new Promise((resolve, reject)=> {
            if (!req.body.result) {
                reject(rejectMessage);
            }
            let result: Promise<FulfillmentResponse>;
            Calculator.mortgageCalculatorRemainingPayment(req).then(remaining =>{
                let returnResponse = Content.calculateMortgageRemaining.simpleResponse + remaining;
                result = Convo_Components.createUtterance(req, returnResponse);
                resolve(result);

            }).catch(err => {
                result = Convo_Components.createUtterance(req, err);
                resolve(result);
            })
        })
    }






    //TOP LEVEL DIRECT
    export function handleDirectMortgage(req): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.directMortgages);

    }


    export function handleMortgagesCatalogue(req): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.mortgageCatalogue).catch(err => {
            console.log("There was an error at the last minute: " + err);
        })

    }
    export function handleMortgagesPreApproval(req): Promise<FulfillmentResponse> {
        console.log("pre-approval blurb");
        return Convo_Components.createUtterance(req, Content.mortgagePreApproval);
    }
    export function handleMortgagesPreApprovalApplyYes(req): Promise<FulfillmentResponse>{
        //TODO: connect to booking application
        return Convo_Components.createUtterance(req, Content.mortgagePreApprovalApplied);
    }
    export function handleMortgagesPreApprovalApplyNo(req): Promise<FulfillmentResponse>{
        return Convo_Components.createUtterance(req, Content.mortgagePreApprovalNotApplied);
    }

    //WHAT KIND OF CALCULATION WOULD YOU LIKE TO DO?
    export function handleCalculateMortgage0(req): Promise<FulfillmentResponse>{
        return Convo_Components.createUtterance(req, Content.calculateMortgage0);
    }


    //TYPES
    export function handleMortgageTypeTraditional(req) : Promise<FulfillmentResponse>{
        return Convo_Components.createUtterance(req, Content.traditionalMortgage);
    }
    export function handleMortgageTypeEquityPower(req) : Promise<FulfillmentResponse>{
        return Convo_Components.createUtterance(req, Content.equityPowerMortgage);
    }
    export function handleMortgageTypeSmartSaver(req) : Promise<FulfillmentResponse>{
        return Convo_Components.createUtterance(req, Content.smartSaversMortgage);
    }

    //SPECIAL OFFERS
    export function handleDirectSpecialOffers(req: any): Promise<FulfillmentResponse>{
        return Convo_Components.createUtterance(req, Content.specialOfferDirect);
    }
    export function handleMortgageRateSpecialOfferAdvance(req: any): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.specialOfferAdvance);
    }
    export function handleMortgageRateSpecialOfferPremier(req: any): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.specialOfferPremier);
    }
    export function handleMortgageRateSpecialOfferPersonalRates(req: any): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.specialOfferPersonalRates);
    }
    export function handleMortgageRateSpecialOfferSmartSaver(req: any): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.specialOfferSmartSaver);
    }
}
