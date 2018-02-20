import * as dotenv from 'dotenv';
dotenv.config();


var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

let server = "http://localhost:8080";
let user = process.env.DIALOGFLOW_USER;
let pass = process.env.DIALOGFLOW_PASS;

describe('Test Script', () => {

    describe('Specific Test Script (White Box) ', () => {

        describe('POST/dialogflow fxfunc', () => {
            it('PASS: handleFindWhatExchangeRate ', (done) => {
                let sendval: {} = {
                    "originalRequest": {
                        "source": "google",
                        "version": "2",
                        "data": {
                            "isInSandbox": true,
                            "surface": {
                                "capabilities": [
                                    {
                                        "name": "actions.capability.AUDIO_OUTPUT"
                                    },
                                    {
                                        "name": "actions.capability.SCREEN_OUTPUT"
                                    }
                                ]
                            },
                            "inputs": [
                                {
                                    "rawInputs": [
                                        {
                                            "query": "exchange",
                                            "inputType": "KEYBOARD"
                                        }
                                    ],
                                    "arguments": [
                                        {
                                            "rawText": "exchange",
                                            "textValue": "exchange",
                                            "name": "text"
                                        }
                                    ],
                                    "intent": "actions.intent.TEXT"
                                }
                            ],
                            "user": {
                                "locale": "en-US",
                                "userId": "ABwppHGmugMe2ygjSH8W8cMzlHJc7VAas8a9inbXCA9edDFmdjPkjN043pauw68axn7Rj6JQrlHYyzPbRQ"
                            },
                            "conversation": {
                                "conversationId": "1509894472129",
                                "type": "ACTIVE",
                                "conversationToken": "[]"
                            },
                            "availableSurfaces": [
                                {
                                    "capabilities": [
                                        {
                                            "name": "actions.capability.AUDIO_OUTPUT"
                                        },
                                        {
                                            "name": "actions.capability.SCREEN_OUTPUT"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    "id": "e20ac6f0-a445-47a7-9699-d4964245c119",
                    "timestamp": "2017-11-05T15:08:04.624Z",
                    "lang": "en-us",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "exchange",
                        "speech": "",
                        "action": "find.what.exchangeRate",
                        "actionIncomplete": false,
                        "parameters": {},
                        "contexts": [
                            {
                                "name": "actions_capability_screen_output",
                                "parameters": {},
                                "lifespan": 0
                            },
                            {
                                "name": "actions_capability_audio_output",
                                "parameters": {},
                                "lifespan": 0
                            },
                            {
                                "name": "google_assistant_input_type_keyboard",
                                "parameters": {},
                                "lifespan": 0
                            }
                        ],
                        "metadata": {
                            "intentId": "47944bbc-2fc1-433d-8e88-a96a69cfaa9a",
                            "webhookUsed": "true",
                            "webhookForSlotFillingUsed": "false",
                            "nluResponseTime": 17,
                            "intentName": "3_find_what_exchange"
                        },
                        "fulfillment": {
                            "speech": "",
                            "messages": [
                                {
                                    "type": "simple_response",
                                    "platform": "google",
                                    "textToSpeech": "Here is a list of all of our exchange rates."
                                },
                                {
                                    "type": 0,
                                    "platform": "facebook",
                                    "speech": "This should return a table of rates as a custom payload"
                                },
                                {
                                    "type": 0,
                                    "speech": ""
                                }
                            ]
                        },
                        "score": 1
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success"
                    },
                    "sessionId": "1509894472129"
                };
                chai.request(server)
                    .post('/dialogflow')
                    .auth(user,pass)
                    .send(sendval)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('speech');
                        res.body.speech.should.be.a('string');
                        res.body.should.have.property('displayText');
                        res.body.displayText.should.be.a('string');
                        res.body.should.have.property('data');
                        res.body.data.should.be.a('object');
                        res.body.should.have.property('contextOut');
                        res.body.contextOut.should.be.a('array');
                        res.body.should.have.property('source');
                        res.body.source.should.be.a('string');
                        done();
                    });
            });

            it('PASS: handleSearchWhatExchangeRate ', (done) => {
                let sendval: {} = {
                    "originalRequest": {
                        "source": "google",
                        "version": "2",
                        "data": {
                            "isInSandbox": true,
                            "surface": {
                                "capabilities": [
                                    {
                                        "name": "actions.capability.AUDIO_OUTPUT"
                                    },
                                    {
                                        "name": "actions.capability.SCREEN_OUTPUT"
                                    }
                                ]
                            },
                            "inputs": [
                                {
                                    "rawInputs": [
                                        {
                                            "query": "convert 100 cad to usd",
                                            "inputType": "KEYBOARD"
                                        }
                                    ],
                                    "arguments": [
                                        {
                                            "rawText": "convert 100 cad to usd",
                                            "textValue": "convert 100 cad to usd",
                                            "name": "text"
                                        }
                                    ],
                                    "intent": "actions.intent.TEXT"
                                }
                            ],
                            "user": {
                                "locale": "en-US",
                                "userId": "ABwppHGmugMe2ygjSH8W8cMzlHJc7VAas8a9inbXCA9edDFmdjPkjN043pauw68axn7Rj6JQrlHYyzPbRQ"
                            },
                            "conversation": {
                                "conversationId": "1509894817541",
                                "type": "ACTIVE",
                                "conversationToken": "[]"
                            },
                            "availableSurfaces": [
                                {
                                    "capabilities": [
                                        {
                                            "name": "actions.capability.AUDIO_OUTPUT"
                                        },
                                        {
                                            "name": "actions.capability.SCREEN_OUTPUT"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    "id": "80dc5dcd-5843-441f-a539-b78fa3510e4d",
                    "timestamp": "2017-11-05T15:13:47.738Z",
                    "lang": "en-us",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "convert 100 cad to usd",
                        "speech": "",
                        "action": "search.what.exchangeRate",
                        "actionIncomplete": false,
                        "parameters": {
                            "amount": "100",
                            "currency_into": "USD",
                            "currency_from": "CAD"
                        },
                        "contexts": [
                            {
                                "name": "actions_capability_screen_output",
                                "parameters": {
                                    "currency_from.original": "cad",
                                    "amount": "100",
                                    "currency_into.original": "usd",
                                    "currency_into": "USD",
                                    "amount.original": "100",
                                    "currency_from": "CAD"
                                },
                                "lifespan": 0
                            },
                            {
                                "name": "actions_capability_audio_output",
                                "parameters": {
                                    "currency_from.original": "cad",
                                    "amount": "100",
                                    "currency_into.original": "usd",
                                    "currency_into": "USD",
                                    "amount.original": "100",
                                    "currency_from": "CAD"
                                },
                                "lifespan": 0
                            },
                            {
                                "name": "google_assistant_input_type_keyboard",
                                "parameters": {
                                    "currency_from.original": "cad",
                                    "amount": "100",
                                    "currency_into.original": "usd",
                                    "currency_into": "USD",
                                    "amount.original": "100",
                                    "currency_from": "CAD"
                                },
                                "lifespan": 0
                            }
                        ],
                        "metadata": {
                            "matchedParameters": [
                                {
                                    "dataType": "@sys.number",
                                    "name": "amount",
                                    "value": "$amount",
                                    "isList": false
                                },
                                {
                                    "required": false,
                                    "dataType": "@foreign_currency",
                                    "name": "currency_from",
                                    "value": "$currency_from",
                                    "prompts": [
                                        {
                                            "lang": "en",
                                            "value": "What currency would you like to change from?"
                                        }
                                    ],
                                    "isList": false
                                },
                                {
                                    "required": true,
                                    "dataType": "@foreign_currency",
                                    "name": "currency_into",
                                    "value": "$currency_into",
                                    "prompts": [
                                        {
                                            "lang": "en",
                                            "value": "What would you like to convert currency to?"
                                        }
                                    ],
                                    "isList": false
                                }
                            ],
                            "intentName": "3_search_what_exchange",
                            "intentId": "855c090b-00b3-4cd9-8c91-21a84466748d",
                            "webhookUsed": "true",
                            "webhookForSlotFillingUsed": "false",
                            "nluResponseTime": 90
                        },
                        "fulfillment": {
                            "speech": "",
                            "messages": [
                                {
                                    "type": 0,
                                    "platform": "facebook",
                                    "speech": "Webhook will return CAD converted into USD."
                                },
                                {
                                    "type": "simple_response",
                                    "platform": "google",
                                    "textToSpeech": "Webhook will return CAD converted into USD."
                                },
                                {
                                    "type": 0,
                                    "speech": ""
                                }
                            ]
                        },
                        "score": 1
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success"
                    },
                    "sessionId": "1509894817541"
                };
                chai.request(server)
                    .post('/dialogflow')
                    .auth(user,pass)
                    .send(sendval)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('speech');
                        res.body.speech.should.be.a('string');
                        res.body.should.have.property('displayText');
                        res.body.displayText.should.be.a('string');
                        res.body.should.have.property('data');
                        res.body.data.should.be.a('object');
                        res.body.should.have.property('contextOut');
                        res.body.contextOut.should.be.a('array');
                        res.body.should.have.property('source');
                        res.body.source.should.be.a('string');
                        done();
                    });
            });
        });

        describe('POST/dialogflow bookfunc ', () => {
            it('PASS: handleBooking ', (done) => {
                let sendval: {} = {
                    "originalRequest": {
                        "source": "google",
                        "version": "2",
                        "data": {
                            "isInSandbox": true,
                            "surface": {
                                "capabilities": [
                                    {
                                        "name": "actions.capability.AUDIO_OUTPUT"
                                    },
                                    {
                                        "name": "actions.capability.SCREEN_OUTPUT"
                                    }
                                ]
                            },
                            "inputs": [
                                {
                                    "rawInputs": [
                                        {
                                            "query": "Appointment John Paul ws_12345@yahoo.com phone no detail 5325123",
                                            "inputType": "KEYBOARD"
                                        }
                                    ],
                                    "arguments": [
                                        {
                                            "rawText": "Appointment John Paul ws_12345@yahoo.com phone no detail 5325123",
                                            "textValue": "Appointment John Paul ws_12345@yahoo.com phone no detail 5325123",
                                            "name": "text"
                                        }
                                    ],
                                    "intent": "actions.intent.TEXT"
                                }
                            ],
                            "user": {
                                "locale": "en-US",
                                "userId": "ABwppHGmugMe2ygjSH8W8cMzlHJc7VAas8a9inbXCA9edDFmdjPkjN043pauw68axn7Rj6JQrlHYyzPbRQ"
                            },
                            "conversation": {
                                "conversationId": "1509894817541",
                                "type": "ACTIVE",
                                "conversationToken": "[]"
                            },
                            "availableSurfaces": [
                                {
                                    "capabilities": [
                                        {
                                            "name": "actions.capability.AUDIO_OUTPUT"
                                        },
                                        {
                                            "name": "actions.capability.SCREEN_OUTPUT"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    "id": "cab2ae47-c008-452d-9bc8-cd0c3d9385f8",
                    "timestamp": "2017-11-05T15:17:02.914Z",
                    "lang": "en-us",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "Appointment John Paul ws_12345@yahoo.com phone no detail 5325123",
                        "speech": "",
                        "action": "book.appointment",
                        "actionIncomplete": false,
                        "parameters": {
                            "contact_method": "phone",
                            "last_name": "Paul",
                            "phone_number": "5325123",
                            "first_name": "John",
                            "email": [
                                "ws_12345@yahoo.com"
                            ],
                            "further_detail": "no detail"
                        },
                        "contexts": [
                            {
                                "name": "actions_capability_screen_output",
                                "parameters": {
                                    "email.original": "ws_12345@yahoo.com",
                                    "contact_method": "phone",
                                    "contact_method.original": "phone",
                                    "last_name.original": "Paul",
                                    "first_name.original": "John",
                                    "phone_number.original": "5325123",
                                    "last_name": "Paul",
                                    "phone_number": "5325123",
                                    "first_name": "John",
                                    "further_detail": "no detail",
                                    "email": [
                                        "ws_12345@yahoo.com"
                                    ],
                                    "further_detail.original": "no detail"
                                },
                                "lifespan": 0
                            },
                            {
                                "name": "actions_capability_audio_output",
                                "parameters": {
                                    "email.original": "ws_12345@yahoo.com",
                                    "contact_method": "phone",
                                    "contact_method.original": "phone",
                                    "last_name.original": "Paul",
                                    "first_name.original": "John",
                                    "phone_number.original": "5325123",
                                    "last_name": "Paul",
                                    "phone_number": "5325123",
                                    "first_name": "John",
                                    "further_detail": "no detail",
                                    "email": [
                                        "ws_12345@yahoo.com"
                                    ],
                                    "further_detail.original": "no detail"
                                },
                                "lifespan": 0
                            },
                            {
                                "name": "google_assistant_input_type_keyboard",
                                "parameters": {
                                    "email.original": "ws_12345@yahoo.com",
                                    "contact_method": "phone",
                                    "contact_method.original": "phone",
                                    "last_name.original": "Paul",
                                    "first_name.original": "John",
                                    "phone_number.original": "5325123",
                                    "last_name": "Paul",
                                    "phone_number": "5325123",
                                    "first_name": "John",
                                    "further_detail": "no detail",
                                    "email": [
                                        "ws_12345@yahoo.com"
                                    ],
                                    "further_detail.original": "no detail"
                                },
                                "lifespan": 0
                            }
                        ],
                        "metadata": {
                            "matchedParameters": [
                                {
                                    "required": true,
                                    "dataType": "@sys.given-name",
                                    "name": "first_name",
                                    "value": "$first_name",
                                    "prompts": [
                                        {
                                            "lang": "en",
                                            "value": "Can I please get your first name?"
                                        }
                                    ],
                                    "isList": false
                                },
                                {
                                    "required": true,
                                    "dataType": "@sys.last-name",
                                    "name": "last_name",
                                    "value": "$last_name",
                                    "prompts": [
                                        {
                                            "lang": "en",
                                            "value": "And your last name, please?"
                                        }
                                    ],
                                    "isList": false
                                },
                                {
                                    "required": true,
                                    "dataType": "@sys.email",
                                    "name": "email",
                                    "value": "$email",
                                    "prompts": [
                                        {
                                            "lang": "en",
                                            "value": "Could I please get your email?"
                                        }
                                    ],
                                    "isList": true
                                },
                                {
                                    "required": true,
                                    "dataType": "@sys.phone-number",
                                    "name": "phone_number",
                                    "value": "$phone_number",
                                    "prompts": [
                                        {
                                            "lang": "en",
                                            "value": "Could I please get your phone number?"
                                        }
                                    ],
                                    "isList": false
                                },
                                {
                                    "required": true,
                                    "dataType": "@sys.any",
                                    "name": "contact_method",
                                    "value": "$contact_method",
                                    "prompts": [
                                        {
                                            "lang": "en",
                                            "value": "How would you like us to contact you? By phone or by email?"
                                        }
                                    ],
                                    "isList": false
                                },
                                {
                                    "required": true,
                                    "dataType": "@sys.any",
                                    "name": "further_detail",
                                    "value": "$further_detail",
                                    "prompts": [
                                        {
                                            "lang": "en",
                                            "value": "Is there any other information you would like to provide for us?"
                                        }
                                    ],
                                    "isList": false
                                }
                            ],
                            "intentName": "00_direct_booking",
                            "intentId": "eb7e6a28-8723-4124-8210-578d2394ff3c",
                            "webhookUsed": "true",
                            "webhookForSlotFillingUsed": "false",
                            "nluResponseTime": 58
                        },
                        "fulfillment": {
                            "speech": "",
                            "messages": [
                                {
                                    "type": 0,
                                    "speech": ""
                                }
                            ]
                        },
                        "score": 1
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success"
                    },
                    "sessionId": "1509894817541"
                };
                chai.request(server)
                    .post('/dialogflow')
                    .auth(user,pass)
                    .send(sendval)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('speech');
                        res.body.speech.should.be.a('string');
                        res.body.should.have.property('displayText');
                        res.body.displayText.should.be.a('string');
                        res.body.should.have.property('data');
                        res.body.data.should.be.a('object');
                        res.body.should.have.property('contextOut');
                        res.body.contextOut.should.be.a('array');
                        res.body.should.have.property('source');
                        res.body.source.should.be.a('string');
                        expect(res.body.speech).to.equal("Thanks! An agent will contact you soon by phone");
                        expect(res.body.displayText).to.equal("Thanks! An agent will contact you soon by phone");
                        done();
                    });
            });
        });

        describe('POST/dialogflow calculator ', () => {
            it('PASS: handleSearchWhatMortgageCalculatorMonthlyPayment ', (done) => {
                let sendval: {} = {
                    "id": "13e83676-570d-44c4-924b-6e5a23d7ffae",
                    "timestamp": "2017-11-06T05:40:35.761Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "1 year",
                        "action": "find.how.mortgages.calculate.monthlyPayment",
                        "actionIncomplete": false,
                        "parameters": {
                            "interestRate": 3,
                            "loanAmount": 100000,
                            "loanDuration": "5 year"
                        },
                        "contexts": [
                            {
                                "name": "calculate_monthly_payments",
                                "parameters": {
                                    "interestRate": 3,
                                    "loanDuration": "5 year",
                                    "loanDuration.original": "5 year",
                                    "loanAmount.original": "100000 USD",
                                    "loanAmount": 100000,
                                    "interestRate.original": "3%"
                                },
                                "lifespan": 1
                            }
                        ],
                        "metadata": {
                            "intentId": "cfd2b147-e933-4117-aae3-f1da94952f02",
                            "webhookUsed": "false",
                            "webhookForSlotFillingUsed": "false",
                            "intentName": "6_find_how_mortgages_calculate_monthlyPayment"
                        },
                        "fulfillment": {
                            "speech": "",
                            "messages": [
                                {
                                    "type": 0,
                                    "platform": "facebook",
                                    "speech": "Send loan amount: $loan amount, interestRate: 8, and loanDuration: 1 year to the webhook."
                                },
                                {
                                    "type": "simple_response",
                                    "platform": "google",
                                    "textToSpeech": "Send loan amount: $loan amount, interestRate: 8, and loanDuration: 1 year to the webhook."
                                },
                                {
                                    "type": 0,
                                    "speech": ""
                                }
                            ]
                        },
                        "score": 1
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success"
                    },
                    "sessionId": "cc17355d-d0f1-46bd-b60d-6a25fa5c5c21"
                };
                chai.request(server)
                    .post('/dialogflow')
                    .auth(user,pass)
                    .send(sendval)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('speech');
                        res.body.speech.should.be.a('string');
                        res.body.should.have.property('displayText');
                        res.body.displayText.should.be.a('string');
                        res.body.should.have.property('data');
                        res.body.data.should.be.a('object');
                        res.body.should.have.property('contextOut');
                        res.body.contextOut.should.be.a('array');
                        res.body.should.have.property('source');
                        res.body.source.should.be.a('string');
                        expect(res.body.speech).to.equal("Your monthly payment is 1796.87");
                        expect(res.body.displayText).to.equal("Your monthly payment is 1796.87");
                        done();
                    });
            });

            it('PASS: handleSearchWhatMortgageCalculatorRemainingPayment ', (done) => {
                let sendval: {} = {
                    "id": "547ac4f3-348e-416b-a93c-d89b99096c1c",
                    "timestamp": "2017-11-06T05:58:39.473Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "9",
                        "action": "find.how.mortgages.calculate.remainingLoan",
                        "actionIncomplete": false,
                        "parameters": {
                            "interestRate": "3",
                            "loanAmount": 100000,
                            "loanDuration": 5,
                            "numberPayments": 50
                        },
                        "contexts": [
                            {
                                "name": "calculate_remaining_loan",
                                "parameters": {
                                    "interestRate": "3",
                                    "loanDuration": 5,
                                    "numberPayments": 50,
                                    "loanDuration.original": "5",
                                    "loanAmount.original": "100000 USD",
                                    "numberPayments.original": "50",
                                    "loanAmount": 100000,
                                    "interestRate.original": "3"
                                },
                                "lifespan": 1
                            }
                        ],
                        "metadata": {
                            "intentId": "401df498-6121-430f-b0be-b728b98df292",
                            "webhookUsed": "false",
                            "webhookForSlotFillingUsed": "false",
                            "intentName": "6_find_how_mortgages_calculate_remainingLoan"
                        },
                        "fulfillment": {
                            "speech": "",
                            "messages": [
                                {
                                    "type": 0,
                                    "platform": "facebook",
                                    "speech": "webhook with loanAmount: 100 , interestRate: 8 , loanDuration: 16, and number of payments: $numberPayment"
                                },
                                {
                                    "type": "simple_response",
                                    "platform": "google",
                                    "textToSpeech": "webhook with loanAmount: 100 , interestRate: 8 , loanDuration: 16, and number of payments: $numberPayment"
                                },
                                {
                                    "type": 0,
                                    "speech": ""
                                }
                            ]
                        },
                        "score": 1
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success"
                    },
                    "sessionId": "cc17355d-d0f1-46bd-b60d-6a25fa5c5c21"
                };
                chai.request(server)
                    .post('/dialogflow')
                    .auth(user,pass)
                    .send(sendval)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('speech');
                        res.body.speech.should.be.a('string');
                        res.body.should.have.property('displayText');
                        res.body.displayText.should.be.a('string');
                        res.body.should.have.property('data');
                        res.body.data.should.be.a('object');
                        res.body.should.have.property('contextOut');
                        res.body.contextOut.should.be.a('array');
                        res.body.should.have.property('source');
                        res.body.source.should.be.a('string');
                        expect(res.body.speech).to.equal("total amount remaining to pay is 84356.12");
                        expect(res.body.displayText).to.equal("total amount remaining to pay is 84356.12");
                        done();
                    });
            });
        });

    });

    describe('General Test Script (Black Box)', () => {

        describe('POST/dialogflow fxfunc', () => {
            it('PASS: handleFindWhatExchangeRate ', (done) => {
                let sendval: {} = {
                    "originalRequest": {
                        "source": "google",
                        "version": "2",
                        "data": {
                            "isInSandbox": true,
                            "surface": {
                                "capabilities": [
                                    {
                                        "name": "actions.capability.AUDIO_OUTPUT"
                                    },
                                    {
                                        "name": "actions.capability.SCREEN_OUTPUT"
                                    }
                                ]
                            },
                            "inputs": [
                                {
                                    "rawInputs": [
                                        {
                                            "query": "exchange",
                                            "inputType": "KEYBOARD"
                                        }
                                    ],
                                    "arguments": [
                                        {
                                            "rawText": "exchange",
                                            "textValue": "exchange",
                                            "name": "text"
                                        }
                                    ],
                                    "intent": "actions.intent.TEXT"
                                }
                            ],
                            "user": {
                                "locale": "en-US",
                                "userId": "ABwppHGmugMe2ygjSH8W8cMzlHJc7VAas8a9inbXCA9edDFmdjPkjN043pauw68axn7Rj6JQrlHYyzPbRQ"
                            },
                            "conversation": {
                                "conversationId": "1509894472129",
                                "type": "ACTIVE",
                                "conversationToken": "[]"
                            },
                            "availableSurfaces": [
                                {
                                    "capabilities": [
                                        {
                                            "name": "actions.capability.AUDIO_OUTPUT"
                                        },
                                        {
                                            "name": "actions.capability.SCREEN_OUTPUT"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    "id": "e20ac6f0-a445-47a7-9699-d4964245c119",
                    "timestamp": "2017-11-05T15:08:04.624Z",
                    "lang": "en-us",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "exchange",
                        "speech": "",
                        "action": "find.what.exchangeRate",
                        "actionIncomplete": false,
                        "parameters": {},
                        "contexts": [
                            {
                                "name": "actions_capability_screen_output",
                                "parameters": {},
                                "lifespan": 0
                            },
                            {
                                "name": "actions_capability_audio_output",
                                "parameters": {},
                                "lifespan": 0
                            },
                            {
                                "name": "google_assistant_input_type_keyboard",
                                "parameters": {},
                                "lifespan": 0
                            }
                        ],
                        "metadata": {
                            "intentId": "47944bbc-2fc1-433d-8e88-a96a69cfaa9a",
                            "webhookUsed": "true",
                            "webhookForSlotFillingUsed": "false",
                            "nluResponseTime": 17,
                            "intentName": "3_find_what_exchange"
                        },
                        "fulfillment": {
                            "speech": "",
                            "messages": [
                                {
                                    "type": "simple_response",
                                    "platform": "google",
                                    "textToSpeech": "Here is a list of all of our exchange rates."
                                },
                                {
                                    "type": 0,
                                    "platform": "facebook",
                                    "speech": "This should return a table of rates as a custom payload"
                                },
                                {
                                    "type": 0,
                                    "speech": ""
                                }
                            ]
                        },
                        "score": 1
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success"
                    },
                    "sessionId": "1509894472129"
                };
                chai.request(server)
                    .post('/dialogflow')
                    .auth(user,pass)
                    .send(sendval)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('speech');
                        res.body.speech.should.be.a('string');
                        res.body.should.have.property('displayText');
                        res.body.displayText.should.be.a('string');
                        res.body.should.have.property('data');
                        res.body.data.should.be.a('object');
                        res.body.should.have.property('contextOut');
                        res.body.contextOut.should.be.a('array');
                        res.body.should.have.property('source');
                        res.body.source.should.be.a('string');
                        done();
                    });
            });

            it('PASS: handleSearchWhatExchangeRate ', (done) => {
                let sendval: {} = {
                    "originalRequest": {
                        "source": "google",
                        "version": "2",
                        "data": {
                            "isInSandbox": true,
                            "surface": {
                                "capabilities": [
                                    {
                                        "name": "actions.capability.AUDIO_OUTPUT"
                                    },
                                    {
                                        "name": "actions.capability.SCREEN_OUTPUT"
                                    }
                                ]
                            },
                            "inputs": [
                                {
                                    "rawInputs": [
                                        {
                                            "query": "convert 100 cad to usd",
                                            "inputType": "KEYBOARD"
                                        }
                                    ],
                                    "arguments": [
                                        {
                                            "rawText": "convert 100 cad to usd",
                                            "textValue": "convert 100 cad to usd",
                                            "name": "text"
                                        }
                                    ],
                                    "intent": "actions.intent.TEXT"
                                }
                            ],
                            "user": {
                                "locale": "en-US",
                                "userId": "ABwppHGmugMe2ygjSH8W8cMzlHJc7VAas8a9inbXCA9edDFmdjPkjN043pauw68axn7Rj6JQrlHYyzPbRQ"
                            },
                            "conversation": {
                                "conversationId": "1509894817541",
                                "type": "ACTIVE",
                                "conversationToken": "[]"
                            },
                            "availableSurfaces": [
                                {
                                    "capabilities": [
                                        {
                                            "name": "actions.capability.AUDIO_OUTPUT"
                                        },
                                        {
                                            "name": "actions.capability.SCREEN_OUTPUT"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    "id": "80dc5dcd-5843-441f-a539-b78fa3510e4d",
                    "timestamp": "2017-11-05T15:13:47.738Z",
                    "lang": "en-us",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "convert 100 cad to usd",
                        "speech": "",
                        "action": "search.what.exchangeRate",
                        "actionIncomplete": false,
                        "parameters": {
                            "amount": "100",
                            "currency_into": "USD",
                            "currency_from": "CAD"
                        },
                        "contexts": [
                            {
                                "name": "actions_capability_screen_output",
                                "parameters": {
                                    "currency_from.original": "cad",
                                    "amount": "100",
                                    "currency_into.original": "usd",
                                    "currency_into": "USD",
                                    "amount.original": "100",
                                    "currency_from": "CAD"
                                },
                                "lifespan": 0
                            },
                            {
                                "name": "actions_capability_audio_output",
                                "parameters": {
                                    "currency_from.original": "cad",
                                    "amount": "100",
                                    "currency_into.original": "usd",
                                    "currency_into": "USD",
                                    "amount.original": "100",
                                    "currency_from": "CAD"
                                },
                                "lifespan": 0
                            },
                            {
                                "name": "google_assistant_input_type_keyboard",
                                "parameters": {
                                    "currency_from.original": "cad",
                                    "amount": "100",
                                    "currency_into.original": "usd",
                                    "currency_into": "USD",
                                    "amount.original": "100",
                                    "currency_from": "CAD"
                                },
                                "lifespan": 0
                            }
                        ],
                        "metadata": {
                            "matchedParameters": [
                                {
                                    "dataType": "@sys.number",
                                    "name": "amount",
                                    "value": "$amount",
                                    "isList": false
                                },
                                {
                                    "required": false,
                                    "dataType": "@foreign_currency",
                                    "name": "currency_from",
                                    "value": "$currency_from",
                                    "prompts": [
                                        {
                                            "lang": "en",
                                            "value": "What currency would you like to change from?"
                                        }
                                    ],
                                    "isList": false
                                },
                                {
                                    "required": true,
                                    "dataType": "@foreign_currency",
                                    "name": "currency_into",
                                    "value": "$currency_into",
                                    "prompts": [
                                        {
                                            "lang": "en",
                                            "value": "What would you like to convert currency to?"
                                        }
                                    ],
                                    "isList": false
                                }
                            ],
                            "intentName": "3_search_what_exchange",
                            "intentId": "855c090b-00b3-4cd9-8c91-21a84466748d",
                            "webhookUsed": "true",
                            "webhookForSlotFillingUsed": "false",
                            "nluResponseTime": 90
                        },
                        "fulfillment": {
                            "speech": "",
                            "messages": [
                                {
                                    "type": 0,
                                    "platform": "facebook",
                                    "speech": "Webhook will return CAD converted into USD."
                                },
                                {
                                    "type": "simple_response",
                                    "platform": "google",
                                    "textToSpeech": "Webhook will return CAD converted into USD."
                                },
                                {
                                    "type": 0,
                                    "speech": ""
                                }
                            ]
                        },
                        "score": 1
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success"
                    },
                    "sessionId": "1509894817541"
                };
                chai.request(server)
                    .post('/dialogflow')
                    .auth(user,pass)
                    .send(sendval)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('speech');
                        res.body.speech.should.be.a('string');
                        res.body.should.have.property('displayText');
                        res.body.displayText.should.be.a('string');
                        res.body.should.have.property('data');
                        res.body.data.should.be.a('object');
                        res.body.should.have.property('contextOut');
                        res.body.contextOut.should.be.a('array');
                        res.body.should.have.property('source');
                        res.body.source.should.be.a('string');
                        done();
                    });
            });
        });

        describe('POST/dialogflow bookfunc', () => {
            it('PASS: handleBooking ', (done) => {
                let sendval: {} = {
                    "originalRequest": {
                        "source": "google",
                        "version": "2",
                        "data": {
                            "isInSandbox": true,
                            "surface": {
                                "capabilities": [
                                    {
                                        "name": "actions.capability.AUDIO_OUTPUT"
                                    },
                                    {
                                        "name": "actions.capability.SCREEN_OUTPUT"
                                    }
                                ]
                            },
                            "inputs": [
                                {
                                    "rawInputs": [
                                        {
                                            "query": "Appointment John Paul ws_12345@yahoo.com phone no detail 5325123",
                                            "inputType": "KEYBOARD"
                                        }
                                    ],
                                    "arguments": [
                                        {
                                            "rawText": "Appointment John Paul ws_12345@yahoo.com phone no detail 5325123",
                                            "textValue": "Appointment John Paul ws_12345@yahoo.com phone no detail 5325123",
                                            "name": "text"
                                        }
                                    ],
                                    "intent": "actions.intent.TEXT"
                                }
                            ],
                            "user": {
                                "locale": "en-US",
                                "userId": "ABwppHGmugMe2ygjSH8W8cMzlHJc7VAas8a9inbXCA9edDFmdjPkjN043pauw68axn7Rj6JQrlHYyzPbRQ"
                            },
                            "conversation": {
                                "conversationId": "1509894817541",
                                "type": "ACTIVE",
                                "conversationToken": "[]"
                            },
                            "availableSurfaces": [
                                {
                                    "capabilities": [
                                        {
                                            "name": "actions.capability.AUDIO_OUTPUT"
                                        },
                                        {
                                            "name": "actions.capability.SCREEN_OUTPUT"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    "id": "cab2ae47-c008-452d-9bc8-cd0c3d9385f8",
                    "timestamp": "2017-11-05T15:17:02.914Z",
                    "lang": "en-us",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "Appointment John Paul ws_12345@yahoo.com phone no detail 5325123",
                        "speech": "",
                        "action": "book.appointment",
                        "actionIncomplete": false,
                        "parameters": {
                            "contact_method": "phone",
                            "last_name": "Paul",
                            "phone_number": "5325123",
                            "first_name": "John",
                            "email": [
                                "ws_12345@yahoo.com"
                            ],
                            "further_detail": "no detail"
                        },
                        "contexts": [
                            {
                                "name": "actions_capability_screen_output",
                                "parameters": {
                                    "email.original": "ws_12345@yahoo.com",
                                    "contact_method": "phone",
                                    "contact_method.original": "phone",
                                    "last_name.original": "Paul",
                                    "first_name.original": "John",
                                    "phone_number.original": "5325123",
                                    "last_name": "Paul",
                                    "phone_number": "5325123",
                                    "first_name": "John",
                                    "further_detail": "no detail",
                                    "email": [
                                        "ws_12345@yahoo.com"
                                    ],
                                    "further_detail.original": "no detail"
                                },
                                "lifespan": 0
                            },
                            {
                                "name": "actions_capability_audio_output",
                                "parameters": {
                                    "email.original": "ws_12345@yahoo.com",
                                    "contact_method": "phone",
                                    "contact_method.original": "phone",
                                    "last_name.original": "Paul",
                                    "first_name.original": "John",
                                    "phone_number.original": "5325123",
                                    "last_name": "Paul",
                                    "phone_number": "5325123",
                                    "first_name": "John",
                                    "further_detail": "no detail",
                                    "email": [
                                        "ws_12345@yahoo.com"
                                    ],
                                    "further_detail.original": "no detail"
                                },
                                "lifespan": 0
                            },
                            {
                                "name": "google_assistant_input_type_keyboard",
                                "parameters": {
                                    "email.original": "ws_12345@yahoo.com",
                                    "contact_method": "phone",
                                    "contact_method.original": "phone",
                                    "last_name.original": "Paul",
                                    "first_name.original": "John",
                                    "phone_number.original": "5325123",
                                    "last_name": "Paul",
                                    "phone_number": "5325123",
                                    "first_name": "John",
                                    "further_detail": "no detail",
                                    "email": [
                                        "ws_12345@yahoo.com"
                                    ],
                                    "further_detail.original": "no detail"
                                },
                                "lifespan": 0
                            }
                        ],
                        "metadata": {
                            "matchedParameters": [
                                {
                                    "required": true,
                                    "dataType": "@sys.given-name",
                                    "name": "first_name",
                                    "value": "$first_name",
                                    "prompts": [
                                        {
                                            "lang": "en",
                                            "value": "Can I please get your first name?"
                                        }
                                    ],
                                    "isList": false
                                },
                                {
                                    "required": true,
                                    "dataType": "@sys.last-name",
                                    "name": "last_name",
                                    "value": "$last_name",
                                    "prompts": [
                                        {
                                            "lang": "en",
                                            "value": "And your last name, please?"
                                        }
                                    ],
                                    "isList": false
                                },
                                {
                                    "required": true,
                                    "dataType": "@sys.email",
                                    "name": "email",
                                    "value": "$email",
                                    "prompts": [
                                        {
                                            "lang": "en",
                                            "value": "Could I please get your email?"
                                        }
                                    ],
                                    "isList": true
                                },
                                {
                                    "required": true,
                                    "dataType": "@sys.phone-number",
                                    "name": "phone_number",
                                    "value": "$phone_number",
                                    "prompts": [
                                        {
                                            "lang": "en",
                                            "value": "Could I please get your phone number?"
                                        }
                                    ],
                                    "isList": false
                                },
                                {
                                    "required": true,
                                    "dataType": "@sys.any",
                                    "name": "contact_method",
                                    "value": "$contact_method",
                                    "prompts": [
                                        {
                                            "lang": "en",
                                            "value": "How would you like us to contact you? By phone or by email?"
                                        }
                                    ],
                                    "isList": false
                                },
                                {
                                    "required": true,
                                    "dataType": "@sys.any",
                                    "name": "further_detail",
                                    "value": "$further_detail",
                                    "prompts": [
                                        {
                                            "lang": "en",
                                            "value": "Is there any other information you would like to provide for us?"
                                        }
                                    ],
                                    "isList": false
                                }
                            ],
                            "intentName": "00_direct_booking",
                            "intentId": "eb7e6a28-8723-4124-8210-578d2394ff3c",
                            "webhookUsed": "true",
                            "webhookForSlotFillingUsed": "false",
                            "nluResponseTime": 58
                        },
                        "fulfillment": {
                            "speech": "",
                            "messages": [
                                {
                                    "type": 0,
                                    "speech": ""
                                }
                            ]
                        },
                        "score": 1
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success"
                    },
                    "sessionId": "1509894817541"
                };
                chai.request(server)
                    .post('/dialogflow')
                    .auth(user,pass)
                    .send(sendval)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('speech');
                        res.body.speech.should.be.a('string');
                        res.body.should.have.property('displayText');
                        res.body.displayText.should.be.a('string');
                        res.body.should.have.property('data');
                        res.body.data.should.be.a('object');
                        res.body.should.have.property('contextOut');
                        res.body.contextOut.should.be.a('array');
                        res.body.should.have.property('source');
                        res.body.source.should.be.a('string');
                        done();
                    });
            });
        });

        describe('POST/dialogflow calculator', () => {
            it('PASS: handleSearchWhatMortgageCalculatorMonthlyPayment ', (done) => {
                let sendval: {} = {
                    "id": "13e83676-570d-44c4-924b-6e5a23d7ffae",
                    "timestamp": "2017-11-06T05:40:35.761Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "1 year",
                        "action": "find.how.mortgages.calculate.monthlyPayment",
                        "actionIncomplete": false,
                        "parameters": {
                            "interestRate": 8,
                            "loanAmount": 100,
                            "loanDuration": "1 year"
                        },
                        "contexts": [
                            {
                                "name": "calculate_monthly_payments",
                                "parameters": {
                                    "interestRate": 8,
                                    "loanDuration": "1 year",
                                    "loanDuration.original": "1 year",
                                    "loanAmount.original": "100 USD",
                                    "loanAmount": 100,
                                    "interestRate.original": "8%"
                                },
                                "lifespan": 1
                            }
                        ],
                        "metadata": {
                            "intentId": "cfd2b147-e933-4117-aae3-f1da94952f02",
                            "webhookUsed": "false",
                            "webhookForSlotFillingUsed": "false",
                            "intentName": "6_find_how_mortgages_calculate_monthlyPayment"
                        },
                        "fulfillment": {
                            "speech": "",
                            "messages": [
                                {
                                    "type": 0,
                                    "platform": "facebook",
                                    "speech": "Send loan amount: $loan amount, interestRate: 8, and loanDuration: 1 year to the webhook."
                                },
                                {
                                    "type": "simple_response",
                                    "platform": "google",
                                    "textToSpeech": "Send loan amount: $loan amount, interestRate: 8, and loanDuration: 1 year to the webhook."
                                },
                                {
                                    "type": 0,
                                    "speech": ""
                                }
                            ]
                        },
                        "score": 1
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success"
                    },
                    "sessionId": "cc17355d-d0f1-46bd-b60d-6a25fa5c5c21"
                };
                chai.request(server)
                    .post('/dialogflow')
                    .auth(user,pass)
                    .send(sendval)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('speech');
                        res.body.speech.should.be.a('string');
                        res.body.should.have.property('displayText');
                        res.body.displayText.should.be.a('string');
                        res.body.should.have.property('data');
                        res.body.data.should.be.a('object');
                        res.body.should.have.property('contextOut');
                        res.body.contextOut.should.be.a('array');
                        res.body.should.have.property('source');
                        res.body.source.should.be.a('string');
                        done();
                    });
            });

            it('PASS: handleSearchWhatMortgageCalculatorRemainingPayment ', (done) => {
                let sendval: {} = {
                    "id": "547ac4f3-348e-416b-a93c-d89b99096c1c",
                    "timestamp": "2017-11-06T05:58:39.473Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "9",
                        "action": "find.how.mortgages.calculate.remainingLoan",
                        "actionIncomplete": false,
                        "parameters": {
                            "interestRate": "8",
                            "loanAmount": 100,
                            "loanDuration": 16,
                            "numberPayments": 9
                        },
                        "contexts": [
                            {
                                "name": "calculate_remaining_loan",
                                "parameters": {
                                    "interestRate": "8",
                                    "loanDuration": 16,
                                    "numberPayments": 9,
                                    "loanDuration.original": "16",
                                    "loanAmount.original": "100 USD",
                                    "numberPayments.original": "9",
                                    "loanAmount": 100,
                                    "interestRate.original": "8"
                                },
                                "lifespan": 1
                            }
                        ],
                        "metadata": {
                            "intentId": "401df498-6121-430f-b0be-b728b98df292",
                            "webhookUsed": "false",
                            "webhookForSlotFillingUsed": "false",
                            "intentName": "6_find_how_mortgages_calculate_remainingLoan"
                        },
                        "fulfillment": {
                            "speech": "",
                            "messages": [
                                {
                                    "type": 0,
                                    "platform": "facebook",
                                    "speech": "webhook with loanAmount: 100 , interestRate: 8 , loanDuration: 16, and number of payments: $numberPayment"
                                },
                                {
                                    "type": "simple_response",
                                    "platform": "google",
                                    "textToSpeech": "webhook with loanAmount: 100 , interestRate: 8 , loanDuration: 16, and number of payments: $numberPayment"
                                },
                                {
                                    "type": 0,
                                    "speech": ""
                                }
                            ]
                        },
                        "score": 1
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success"
                    },
                    "sessionId": "cc17355d-d0f1-46bd-b60d-6a25fa5c5c21"
                };
                chai.request(server)
                    .post('/dialogflow')
                    .auth(user,pass)
                    .send(sendval)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('speech');
                        res.body.speech.should.be.a('string');
                        res.body.should.have.property('displayText');
                        res.body.displayText.should.be.a('string');
                        res.body.should.have.property('data');
                        res.body.data.should.be.a('object');
                        res.body.should.have.property('contextOut');
                        res.body.contextOut.should.be.a('array');
                        res.body.should.have.property('source');
                        res.body.source.should.be.a('string');
                        done();
                    });
            });
        });

    });

    describe('Targeted Test Script', () => {
        it('BOUND CHECKING NEGATIVE NUMBER: handleSearchWhatMortgageCalculatorMonthlyPayment ', (done) => {
            let sendval: {} = {
                "id": "13e83676-570d-44c4-924b-6e5a23d7ffae",
                "timestamp": "2017-11-06T05:40:35.761Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "1 year",
                    "action": "find.how.mortgages.calculate.monthlyPayment",
                    "actionIncomplete": false,
                    "parameters": {
                        "interestRate": -8,
                        "loanAmount": -100,
                        "loanDuration": "1 year"
                    },
                    "contexts": [
                        {
                            "name": "calculate_monthly_payments",
                            "parameters": {
                                "interestRate": -8,
                                "loanDuration": "1 year",
                                "loanDuration.original": "1 year",
                                "loanAmount.original": "-100 USD",
                                "loanAmount": -100,
                                "interestRate.original": "-8%"
                            },
                            "lifespan": 1
                        }
                    ],
                    "metadata": {
                        "intentId": "cfd2b147-e933-4117-aae3-f1da94952f02",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "6_find_how_mortgages_calculate_monthlyPayment"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Send loan amount: $loan amount, interestRate: 8, and loanDuration: 1 year to the webhook."
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "Send loan amount: $loan amount, interestRate: 8, and loanDuration: 1 year to the webhook."
                            },
                            {
                                "type": 0,
                                "speech": ""
                            }
                        ]
                    },
                    "score": 1
                },
                "status": {
                    "code": 200,
                    "errorType": "success"
                },
                "sessionId": "cc17355d-d0f1-46bd-b60d-6a25fa5c5c21"
            };
            chai.request(server)
                .post('/dialogflow')
                .auth(user, pass)
                .send(sendval)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('speech');
                    res.body.speech.should.be.a('string');
                    res.body.should.have.property('displayText');
                    res.body.displayText.should.be.a('string');
                    res.body.should.have.property('data');
                    res.body.data.should.be.a('object');
                    res.body.should.have.property('contextOut');
                    res.body.contextOut.should.be.a('array');
                    res.body.should.have.property('source');
                    res.body.source.should.be.a('string');
                    expect(res.body.speech).to.equal("Invalid Input");
                    expect(res.body.displayText).to.equal("Invalid Input");
                    done();
                });
        });

        it('BOUND CHECKING NEGATIVE NUMBER: handleSearchWhatMortgageCalculatorRemainingPayment ', (done) => {
            let sendval: {} = {
                "id": "547ac4f3-348e-416b-a93c-d89b99096c1c",
                "timestamp": "2017-11-06T05:58:39.473Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "9",
                    "action": "find.how.mortgages.calculate.remainingLoan",
                    "actionIncomplete": false,
                    "parameters": {
                        "interestRate": "-8",
                        "loanAmount": -100,
                        "loanDuration": 16,
                        "numberPayments": 9
                    },
                    "contexts": [
                        {
                            "name": "calculate_remaining_loan",
                            "parameters": {
                                "interestRate": "-8",
                                "loanDuration": 16,
                                "numberPayments": 9,
                                "loanDuration.original": "16",
                                "loanAmount.original": "-100 USD",
                                "numberPayments.original": "9",
                                "loanAmount": -100,
                                "interestRate.original": "-8"
                            },
                            "lifespan": 1
                        }
                    ],
                    "metadata": {
                        "intentId": "401df498-6121-430f-b0be-b728b98df292",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "6_find_how_mortgages_calculate_remainingLoan"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "webhook with loanAmount: 100 , interestRate: 8 , loanDuration: 16, and number of payments: $numberPayment"
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "webhook with loanAmount: 100 , interestRate: 8 , loanDuration: 16, and number of payments: $numberPayment"
                            },
                            {
                                "type": 0,
                                "speech": ""
                            }
                        ]
                    },
                    "score": 1
                },
                "status": {
                    "code": 200,
                    "errorType": "success"
                },
                "sessionId": "cc17355d-d0f1-46bd-b60d-6a25fa5c5c21"
            };
            chai.request(server)
                .post('/dialogflow')
                .auth(user, pass)
                .send(sendval)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('speech');
                    res.body.speech.should.be.a('string');
                    res.body.should.have.property('displayText');
                    res.body.displayText.should.be.a('string');
                    res.body.should.have.property('data');
                    res.body.data.should.be.a('object');
                    res.body.should.have.property('contextOut');
                    res.body.contextOut.should.be.a('array');
                    res.body.should.have.property('source');
                    res.body.source.should.be.a('string');
                    expect(res.body.speech).to.equal("Invalid Input");
                    expect(res.body.displayText).to.equal("Invalid Input");
                    done();
                });
        });

        it('BOUND CHECKING NEGATIVE PAYMENT LEFT: handleSearchWhatMortgageCalculatorRemainingPayment ', (done) => {
            let sendval: {} = {
                "id": "547ac4f3-348e-416b-a93c-d89b99096c1c",
                "timestamp": "2017-11-06T05:58:39.473Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "9",
                    "action": "find.how.mortgages.calculate.remainingLoan",
                    "actionIncomplete": false,
                    "parameters": {
                        "interestRate": "8",
                        "loanAmount": 100,
                        "loanDuration": 8,
                        "numberPayments": 9
                    },
                    "contexts": [
                        {
                            "name": "calculate_remaining_loan",
                            "parameters": {
                                "interestRate": "8",
                                "loanDuration": 8,
                                "numberPayments": 9,
                                "loanDuration.original": "8",
                                "loanAmount.original": "100 USD",
                                "numberPayments.original": "9",
                                "loanAmount": 100,
                                "interestRate.original": "8"
                            },
                            "lifespan": 1
                        }
                    ],
                    "metadata": {
                        "intentId": "401df498-6121-430f-b0be-b728b98df292",
                        "webhookUsed": "false",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "6_find_how_mortgages_calculate_remainingLoan"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "webhook with loanAmount: 100 , interestRate: 8 , loanDuration: 16, and number of payments: $numberPayment"
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "webhook with loanAmount: 100 , interestRate: 8 , loanDuration: 16, and number of payments: $numberPayment"
                            },
                            {
                                "type": 0,
                                "speech": ""
                            }
                        ]
                    },
                    "score": 1
                },
                "status": {
                    "code": 200,
                    "errorType": "success"
                },
                "sessionId": "cc17355d-d0f1-46bd-b60d-6a25fa5c5c21"
            };
            chai.request(server)
                .post('/dialogflow')
                .auth(user, pass)
                .send(sendval)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('speech');
                    res.body.speech.should.be.a('string');
                    res.body.should.have.property('displayText');
                    res.body.displayText.should.be.a('string');
                    res.body.should.have.property('data');
                    res.body.data.should.be.a('object');
                    res.body.should.have.property('contextOut');
                    res.body.contextOut.should.be.a('array');
                    res.body.should.have.property('source');
                    res.body.source.should.be.a('string');
                    expect(res.body.speech).to.equal("Invalid Input");
                    expect(res.body.displayText).to.equal("Invalid Input");
                    done();
                });
        });
    });

});