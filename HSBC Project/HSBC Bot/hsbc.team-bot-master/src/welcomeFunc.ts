/**
 * Created by valeriewyns on 2017-11-11.
 */

import {FulfillmentResponse} from './contracts';
import {Convo_Components} from "./ConversationComponents";
import {Content} from './contentObject';

export namespace Welcome {
    export function handleWelcome(req: any): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.welcome);
    }
    export function handleAboutUs(req: any): Promise<FulfillmentResponse> {
        return Convo_Components.createUtterance(req, Content.aboutUs);
    }
}
