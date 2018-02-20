/**
 * Created by valeriewyns on 2017-11-24.
 */

import {FulfillmentResponse} from './contracts';
import {Content} from './contentObject';
import {Convo_Components} from './ConversationComponents';

import {DefaultApi, HttpBasicAuth} from './hsbc-api';
import {Exchange} from "./Exchange";


const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST + "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);

const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);


export namespace FxFunc {

    export function handleFindFxRate(req) : Promise<FulfillmentResponse>{
        return new Promise((resolve, reject)=> {
            let result: Promise<FulfillmentResponse>;
            Exchange.findExchangeRate(req).then(rates =>{
                let returnResponse = Content.findFxRates.simpleResponse + rates;
                result = Convo_Components.createUtterance(req, returnResponse.toString());
                resolve(result);

            }).catch(err => {
                result = Convo_Components.createUtterance(req, err);
                resolve(result);
            })
        })
    }


    export function handleSearchFxRate(req: any): Promise<FulfillmentResponse> {
        return new Promise((resolve, reject)=> {
            let result: Promise<FulfillmentResponse>;
            Exchange.searchWhatExchangeRate(req).then(rates =>{
                let returnResponse = Content.searchFxRates.simpleResponse + rates;
                result = Convo_Components.createUtterance(req, returnResponse.toString());
                resolve(result);

            }).catch(err => {
                result = Convo_Components.createUtterance(req, err);
                resolve(result);
            })
        })
    }


}