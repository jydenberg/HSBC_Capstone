import * as mocha from  'mocha';
import {MortFunc} from "../../src/mortgageFunc";


var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

// ALL OF THIS TEST ARE DONE BLACK BOX
// SINCE TEXT VALUE CHANGE SHOULDN'T CAUSE ERROR
// CHECKS WHETHER THEY RETURN AN OBJECT OF FORM FULFILLMENT RESPONSE

describe('Mortgage Test Script', () => {

    describe('handleDirectMortgage', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "e1c13ae5-861c-449a-9df2-979e3a06490a",
                    "timestamp": "2017-11-23T16:37:25.353Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "mortgage",
                        "action": "direct.mortgages",
                        "actionIncomplete": false,
                        "parameters": {},
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
            return MortFunc.handleDirectMortgage(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function returns given an empty request", function () {
            let sendval: {} = {body : {}};
            return MortFunc.handleDirectMortgage(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                //console.log(err);
                expect.fail();
            })
        });

    });

    describe('handleMortgagesCatalogue', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "936fab7f-47fb-42a9-bfc2-ceded2c71f73",
                    "timestamp": "2017-11-23T16:47:13.644Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "Mortgage types",
                        "action": "find.what.mortgages.catalogue",
                        "actionIncomplete": false,
                        "parameters": {},
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
            return MortFunc.handleMortgagesCatalogue(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function returns given an empty request", function () {
            let sendval: {} = {body : {}};
            return MortFunc.handleMortgagesCatalogue(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();

            })
        });

    });

    describe('handleMortgagesPreApproval', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "4d4b653c-bcd4-4720-84c9-45dd56dc3fcf",
                    "timestamp": "2017-11-23T16:51:47.105Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "English",
                        "action": "find.what.mortgages.preApproval",
                        "actionIncomplete": false,
                        "parameters": {
                            "co-applicant": "No",
                            "email": "trail@gmail.com",
                            "first_name": "Josh",
                            "last_name": "Zhu",
                            "mortgage_type": "Premier Curstomer Mortgage",
                            "phone_num": "6087751234",
                            "preferred_language": "English",
                            "preferred_time": "Afternoon",
                            "promotion_code": "No"
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
            return MortFunc.handleMortgagesPreApproval(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });
    });


    describe('handleCalculateMortgage0', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "2161b369-602f-4f71-873f-82bf0d09e918",
                    "timestamp": "2017-11-23T16:59:36.418Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "yes",
                        "action": "find.how.mortgages.calculate.0",
                        "actionIncomplete": false,
                        "parameters": {},
                        "score": 0.7512499895834375
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success",
                        "webhookTimedOut": false
                    },
                    "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
                }
            };
            return MortFunc.handleCalculateMortgage0(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function returns given an empty request", function () {
            let sendval: {} = {body : {}};
            return MortFunc.handleCalculateMortgage0(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();

            })
        });
    });


    describe('handleMortgageTypeTraditional', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "dd37c50e-4b6b-4e1b-80f7-9fc590f3b215",
                    "timestamp": "2017-11-23T17:06:06.523Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "traditional",
                        "action": "mortgage.what.tradMortgage",
                        "actionIncomplete": false,
                        "parameters": {
                            "ordinal": ""
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
            return MortFunc.handleMortgageTypeTraditional(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function returns given an empty request", function () {
            let sendval: {} = {body : {}};
            return MortFunc.handleMortgageTypeTraditional(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');
            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });
    });


    describe('handleMortgageTypeEquityPower', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "dd37c50e-4b6b-4e1b-80f7-9fc590f3b215",
                    "timestamp": "2017-11-23T17:06:06.523Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "traditional",
                        "action": "mortgage.what.equityPower",
                        "actionIncomplete": false,
                        "parameters": {
                            "ordinal": ""
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
            return MortFunc.handleMortgageTypeEquityPower(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function returns given an empty request", function () {
            let sendval: {} = {body : {}};
            return MortFunc.handleMortgageTypeEquityPower(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');
            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });
    });

    describe('handleMortgageTypeSmartSaver', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "dd37c50e-4b6b-4e1b-80f7-9fc590f3b215",
                    "timestamp": "2017-11-23T17:06:06.523Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "traditional",
                        "action": "mortgage.what.smartSaver",
                        "actionIncomplete": false,
                        "parameters": {
                            "ordinal": ""
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
            return MortFunc.handleMortgageTypeSmartSaver(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function returns given an empty request", function () {
            let sendval: {} = {body : {}};
            return MortFunc.handleMortgageTypeSmartSaver(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });
    });

    describe('handleMortgageRateSpecialOfferAdvance', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "6099eb36-f763-44ee-9ee8-5d227a870954",
                    "timestamp": "2017-11-23T17:32:10.036Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "advance",
                        "action": "mortgageRate.specialOffer.advance",
                        "actionIncomplete": false,
                        "parameters": {
                            "specialOffer": "advance"
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
            return MortFunc.handleMortgageRateSpecialOfferAdvance(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function returns given an empty request", function () {
            let sendval: {} = {body : {}};
            return MortFunc.handleMortgageRateSpecialOfferAdvance(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');
            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });
    });

    describe('handleMortgageRateSpecialOfferPremier', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "dd16e754-f65b-475c-81c9-2d2e49ab94fa",
                    "timestamp": "2017-11-23T17:33:46.159Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "premier",
                        "action": "mortgageRate.specialOffer.premier",
                        "actionIncomplete": false,
                        "parameters": {
                            "specialOffer": "premier"
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
            return MortFunc.handleMortgageRateSpecialOfferPremier(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function returns given an empty request", function () {
            let sendval: {} = {body : {}};
            return MortFunc.handleMortgageRateSpecialOfferPremier(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');
            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });
    });

    describe('handleMortgageRateSpecialOfferPersonalRates', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "be8badcd-ad4a-4691-8bfd-dc99159529f9",
                    "timestamp": "2017-11-23T17:35:38.107Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "personal",
                        "action": "mortgageRate.specialOffer.personalRates",
                        "actionIncomplete": false,
                        "parameters": {
                            "specialOffer": "personalRates"
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
            return MortFunc.handleMortgageRateSpecialOfferPersonalRates(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function returns given an empty request", function () {
            let sendval: {} = {body : {}};
            return MortFunc.handleMortgageRateSpecialOfferPersonalRates(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });
    });

    describe('handleMortgageRateSpecialOfferSmartSaver', () => {

        it("function returns given an empty request", function () {
            let sendval: {} = {
                body : {
                    "id": "50d5edec-9cf0-4b60-bd2f-76c8a6385660",
                    "timestamp": "2017-11-23T17:36:43.831Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "smart",
                        "action": "mortgageRate.specialOffer.smartSaver",
                        "actionIncomplete": false,
                        "parameters": {
                            "specialOffer": "smartSaver"
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
            return MortFunc.handleMortgageRateSpecialOfferSmartSaver(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function returns given an empty request", function () {
            let sendval: {} = {body : {}};
            return MortFunc.handleMortgageRateSpecialOfferSmartSaver(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('object');
                response.should.have.property('speech');
                response.speech.should.be.a('string');
                response.should.have.property('displayText');
                response.displayText.should.be.a('string');
                response.should.have.property('data');
                response.data.should.be.a('object');
                response.should.have.property('contextOut');
                response.contextOut.should.be.a('array');
                response.should.have.property('source');
                response.source.should.be.a('string');

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
               expect.fail();
            })
        });
    });
});