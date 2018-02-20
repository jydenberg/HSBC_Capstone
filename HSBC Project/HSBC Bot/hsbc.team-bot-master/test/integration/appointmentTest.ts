import * as dotenv from 'dotenv';
dotenv.config();
import {Appointments} from "../../src/Appointments";

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var should = chai.should();

chai.use(chaiHttp);

// ALL OF THIS TEST ARE DONE BLACK BOX
// SINCE TEXT VALUE CHANGE SHOULDN'T CAUSE ERROR
// CHECKS WHETHER THEY RETURN AN OBJECT OF FORM FULFILLMENT RESPONSE

describe('Appointment Test Script', () => {

    describe('createBooking', () => {

        it("function return a string response with the right request", function () {

            let testRequest: Object = {
                body: {
                    "id": "6e134223-5f71-4209-96f7-31b4ec486be4",
                    "timestamp": "2017-11-23T15:30:21.261Z",
                    "lang": "en",
                    "result": {
                        "parameters": {
                            "contact_email": "trial@gmail.com",
                            "contact_method": "phone, email",
                            "first_name": "Josh",
                            "further_detail": "mortgage deals",
                            "last_name": "Zhu",
                            "phone_number": "6087717789"
                        },
                        "score": 1
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success",
                        "webhookTimedOut": false
                    },
                    "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
                }
            };

            return Appointments.createBooking(testRequest).then(function (response) {

                //console.log(response);
                response.should.not.eql("");

            }).catch(function (err) {
                expect.fail(err);
            })
        });

    });
});