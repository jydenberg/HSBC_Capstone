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

export namespace Appointments {

    // Input: Booking Function req from DF
    // Output: Requested booking information, Confirmation of email sent
    // NOTE: This is not a verified request return from HSBC - it only returns the details requested
    // by the customer (Still needs to be confirmed and contacted by HSBC based on inputed info).
    export function createBooking(req: any): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            if (!req.body || !req.body || ! req.body.result.parameters) {
                console.error("createBooking(): received invalid request: " + JSON.stringify(req));
                reject("Invalid request: missing parameters in body");
            }

            let params = req.body.result.parameters;
            let fName : string = params.first_name.toString();
            let lName : string = params.last_name.toString();
            let cEmail : string = params.contact_email.toString();
            let method = params.contact_method.toString();
            let phoneNum : string = params.phone_number.toString();
            let detail : string = params.further_detail.toString();

            let contact = {firstName : fName, lastName: lName, email: cEmail, phone: phoneNum};
            let booking = {contactInfo: contact, details:detail};

            client.appointmentsPost(booking).then(result => {

                //TODO does ref return a status from the request (as in success vs error)
                let ref = result.body.reference;
                let date = result.body.date;

                let a1 : string = "Thanks for chosing HSBC!\nAn agent will contact you soon. ";
                let a2 : string = "\nYour reference string is" + ref;
                let a3 : string = "\n, An HSBC representative will contact you to book an appointment based on the details included.";
                let ans : string = a1+a2+a3;

                resolve(ans);

            }).catch(err => {
                let error: string = "Error: " + err;
                resolve(error);

            });
        });

    }

}