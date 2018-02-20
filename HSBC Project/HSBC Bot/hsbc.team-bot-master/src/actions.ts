import * as express from 'express';
import * as bodyParser from 'body-parser';

import {FulfillmentResponse, FulfillmentRequest} from './contracts';
import {Calculator} from "./Calculator";
import {Exchange} from "./Exchange";
import {AtmFunc} from "./atmFunc";
import {MortFunc} from "./mortgageFunc";
import {Appointments} from "./Appointments";
import {Welcome} from "./welcomeFunc";
import {RrspFunc} from "./rrspFunc";
import {WsfFunc} from "./wsfFunc";
import {Convo_Components} from "./ConversationComponents";
import {CustomerFunc} from "./customerFunc";
import {BookFunc} from "./bookFunc";

'use strict';
import {FxFunc} from "./fxFunc";



const app: express.Express = express();

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//so let's map our dialogFlow actions to our webhook functions
let actionToFuncMap = {
                    //
                    "welcome" : Welcome.handleWelcome,
                    "GOOGLE_ASSISTANT_WELCOME " : Welcome.handleWelcome,
                    "smalltalk.agent.talk_to_me" : Welcome.handleWelcome,
                    "input.welcome.trial" : Welcome.handleWelcome,
                    "" : Welcome.handleWelcome,




                    //ATM
                    "find.atm" : AtmFunc.handleFindAtm,
                    "search.where.atm" : AtmFunc.handleSearchWhereAtm,
                    "search.where.atm.permission" : AtmFunc.permissionAtm,
                    "actions.intent.PERMISSION" : AtmFunc.handleSearchWhereAtmLocation,




                    //FXRATES
                    "find.what.exchangeRate" : FxFunc.handleFindFxRate,
                    "search.what.exchangeRate" : FxFunc.handleSearchFxRate,




                    //RRSP
                    "direct.rrsp" : RrspFunc.handleDirectRRSP,
                    "find.how.apply.rrsp" : RrspFunc.handleApplyRRSP,
                    "find.what.rrsp.benefits" : RrspFunc.handleRRSPBenefits,
                    "find.what.rrsp.brokerageAccount.no" : RrspFunc.handleRRSPBrokerageNo,
                    "find.what.rrsp.brokerageAccount.yes" : RrspFunc.handleRRSPBrokerageYes,




                    //WSF
                    "direct.wsf" : WsfFunc.handleDirectWsf,
                    "find.what.wsf.eligible" : WsfFunc.handleEligibilityWSF,
                    "find.what.wsf.more" : WsfFunc.handleWsfMore,
                    "find.what.wsf.no" : WsfFunc.handleWsfNo,
                    "find.what.wsf.advantages" : WsfFunc.handleWsfAdvantages,



                    //MORTGAGES
                    "direct.mortgages" : MortFunc.handleDirectMortgage,
                    //preApproval
                    "find.what.mortgages.preApproval" : MortFunc.handleMortgagesPreApproval,
                    "find.what.mortgages.preApproval.yes" : MortFunc.handleMortgagesPreApprovalApplyYes,
                    "find.what.mortgages.preApproval.no" : MortFunc.handleMortgagesPreApprovalApplyNo,
                    //calculate
                    "find.how.mortgages.calculate0" : MortFunc.handleCalculateMortgage0,
                    "find.how.mortgages.calculate.monthlyPayment" : MortFunc.handleCalculateMortgageMonthly,
                    "find.how.mortgages.calculate.remainingLoan" : MortFunc.handleCalculateRemaining,
                    //specialOffers
                    "direct.mortgages.specialOffers" : MortFunc.handleDirectSpecialOffers,
                    "mortgageRate.specialOffer.advance" : MortFunc.handleMortgageRateSpecialOfferAdvance,
                    "mortgageRate.specialOffer.premier" : MortFunc.handleMortgageRateSpecialOfferPremier,
                    "mortgageRate.specialOffer.personalRates" : MortFunc.handleMortgageRateSpecialOfferPersonalRates,
                    "mortgageRate.specialOffer.smartSaver" : MortFunc.handleMortgageRateSpecialOfferSmartSaver,
                    //types
                    "find.what.mortgages.catalogue" : MortFunc.handleMortgagesCatalogue,
                    "mortgage.what.trad" : MortFunc.handleMortgageTypeTraditional,
                    "mortgage.what.equityPower" : MortFunc.handleMortgageTypeEquityPower,
                    "mortgage.what.smartSaver" : MortFunc.handleMortgageTypeSmartSaver,



                    //CUSTOMERS
                    "direct.advance" : CustomerFunc.handleDirectAdvance,
                    "search.what.advance.benefits" : CustomerFunc.handleAdvanceBenefits,

                    "direct.premier" : CustomerFunc.handleDirectPremier,
                    "search.what.premier.application" : CustomerFunc.handlePremierApplication,
                    "search.what.premier.benefits" : CustomerFunc.handlePremierBenefits,
                    "search.what.premier.eligible" : CustomerFunc.handlePremierEligibility,



                    //MISCELLANEOUS
                    "direct.apply" : Appointments.createBooking,
                    "book.appointment" : BookFunc.handleBooking,
                    "blurb.aboutUs" : Welcome.handleAboutUs,
                    };

export namespace Actions {
    //called in app.ts and handles all of the action to function mapping and calling
    import createUtterance = Convo_Components.createUtterance;
    export function handleRequest(req: any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let currentAction = req.body.result.action;
            console.log("current action: " + currentAction);
            if(typeof currentAction === "undefined") {
                reject("invalid request");
            }
            //call the appropriate function according to its action... IF it exists
            if(actionToFuncMap[currentAction]){
                actionToFuncMap[currentAction](req).then(response =>{
                    resolve(response);
                }).catch(err => {
                    resolve(Convo_Components.returnSimpleResponse("I'm sorry. There has been an error: " + err))
                })
            }else{
                resolve(Convo_Components.returnSimpleResponse("I'm sorry. My mind skipped a beat. What was that?   \n I didn't catch: " + currentAction))
            }
        })
    }
}
