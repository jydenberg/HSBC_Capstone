/**
 * Created by valeriewyns on 2017-11-21.
 */
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

export namespace CustomerFunc {
    //ADVANCE CUSTOMER
    export function handleDirectAdvance(req): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.directAdvance);
    }
    export function handleAdvanceBenefits(req): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.advanceCustomerBenefits);
    }
    //PREMIER CUSTOMER
    export function handleDirectPremier(req): Promise<FulfillmentResponse> {
        console.log("directPremier");
        return Convo_Components.createUtterance(req, Content.directPremier);
    }
    export function handlePremierBenefits(req): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.premierCustomerBenefits);
    }
    export function handlePremierApplication(req): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.premierCustomerApplication);
    }
    export function handlePremierEligibility(req): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.premierCustomerEligibility);
    }
}


