import {NextFunction, Request, Response, Router} from "express";
import * as emailer from "../emailer";

'use strict';

interface AppointmentBooking {
    contactInfo: ContactInfo,
    details: string
}

interface AppointmentInfo {
    reference: string,
    date: string
}

interface ContactInfo {
    firstName: string,
    lastName: string,
    email: string,
    phone: string
}

export class AppointmentsRouter {

    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public generateBookingRef() : string {
        return (Math.random() + 1).toString(36).substring(8); // todo
    }

    public post(req: Request, res: Response) {

        // get booking information
        let info : ContactInfo = req.body.contactInfo;
        let reference : string = (Math.random() + 1).toString(36).substring(8);
        console.log(reference);
        emailer.send(info.email, `${info.lastName}, ${info.firstName}`,
            info.phone, req.body.details, reference).then(() => {

            // sample response body
            let payload : AppointmentInfo = {
                reference: reference,
                date: new Date().toISOString()
            };

            res.send(payload);

        }).catch(err => {
            console.error(`Error sending booking email: ${err}`);
            res.sendStatus(500);
        });

    }

    private init() {
        this.router.post("/", this.post);
    }

}

const appointmentRoutes = new AppointmentsRouter();
export default appointmentRoutes.router;