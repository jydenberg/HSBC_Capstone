/**
 * Created by valeriewyns on 2017-11-25.
 */
import {FulfillmentResponse, ContentObject} from './contracts';
import {Convo_Components} from './ConversationComponents';
import {Content} from './contentObject';
import {Appointments} from "./Appointments";

const rejectMessage = "I'm sorry, that was an invalid request";


export namespace BookFunc {
    export function handleBooking(req): Promise<FulfillmentResponse>{
        console.log("handle booking");
        return new Promise((resolve, reject) => {
            if (!req.body.result) {
                reject(rejectMessage);
            }
            let result: Promise<FulfillmentResponse>;
            Appointments.createBooking(req).then(status => {
                console.log("back from the booking func");
                let returnResponse = Content.bookAppointment;
                returnResponse.simpleResponse = returnResponse.simpleResponse + status;
                result = Convo_Components.createUtterance(req, returnResponse);
                resolve(result);
            }).catch(err => {
                console.log("error with booking");
                result = Convo_Components.createUtterance(req, err);
                resolve(result);
            })
        })
    }

}
