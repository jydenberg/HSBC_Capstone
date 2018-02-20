/**
 * Created by valeriewyns on 2017-11-13.
 */
import {Convo_Components} from "./ConversationComponents";
import {Images} from "./imageLibrary";
import {FulfillmentResponse} from "./contracts";
import {Content} from './contentObject';


export namespace RrspFunc {
    export function handleDirectRRSP(req: any): Promise<FulfillmentResponse>{
        return Convo_Components.createUtterance(req, Content.directRRSP);
    }
    export function handleApplyRRSP(req:any): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.applyRRSP);
    }
    export function handleRRSPBenefits(req:any): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.benefitsRRSP);
    }
    export function handleRRSPBrokerageYes(req:any): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.bookAppointment);
    }
    export function handleRRSPBrokerageNo(req:any): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.rrspBrokerageAccountNo);
    }
}