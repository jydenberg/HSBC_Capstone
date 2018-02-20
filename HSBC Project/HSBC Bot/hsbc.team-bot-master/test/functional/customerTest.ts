import * as mocha from  'mocha';
import {CustomerFunc} from '../../src/customerFunc'
import {error} from "util";


var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

// ALL OF THIS TEST ARE DONE BLACK BOX
// SINCE TEXT VALUE CHANGE SHOULDN'T CAUSE ERROR
// CHECKS WHETHER THEY RETURN AN OBJECT OF FORM FULFILLMENT RESPONSE

describe('Customer Test Script', () => {

    describe('handleDirectAdvance', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "0758a586-e59e-46f5-85d2-903c56f9a8a8",
                    "timestamp": "2017-11-22T23:56:12.562Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "advance",
                        "action": "direct.advance",
                        "actionIncomplete": false,
                        "parameters": {
                            "customer_type": ""
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
            return CustomerFunc.handleDirectAdvance(sendval).then(function (response) {
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

        it("function return given an empty request", function () {
            let sendval: {} = {body:{}};
            return CustomerFunc.handleDirectAdvance(sendval).then(function (response) {
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
                //console.log(err);
                //expect(err).to.be.a('string');
                expect.fail();

            })
        });

    });

    describe('handleAdvanceBenefits', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "d2084609-50b0-4bec-a8fc-9720ae60e012",
                    "timestamp": "2017-11-22T23:59:37.445Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "benefits",
                        "action": "search.what.advance.benefits",
                        "actionIncomplete": false,
                        "parameters": {
                            "customer_type": ""
                        },
                        "score": 0.7599999904632568
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success",
                        "webhookTimedOut": false
                    },
                    "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
                }
            };
            return CustomerFunc.handleAdvanceBenefits(sendval).then(function (response) {
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

        it("function return given an empty request", function () {
            let sendval: {} = {body:{}};
            return CustomerFunc.handleAdvanceBenefits(sendval).then(function (response) {
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
                //console.log(err);
                expect.fail();
            })
        });

    });

    describe('handleDirectPremier', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "295faef9-1b07-4921-9ad1-79fe108bd7b8",
                    "timestamp": "2017-11-23T00:04:03.772Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "premier",
                        "action": "direct.premier",
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
            return CustomerFunc.handleDirectPremier(sendval).then(function (response) {
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

        it("function return given an empty request", function () {
            let sendval: {} = {body : {}};
            return CustomerFunc.handleDirectPremier(sendval).then(function (response) {
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

    describe('handlePremierBenefits', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "994648a5-2a2d-4f0e-9bf3-b7f959720d56",
                    "timestamp": "2017-11-23T00:09:49.97Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "benefit",
                        "action": "search.what.premier.benefits",
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
            return CustomerFunc.handlePremierBenefits(sendval).then(function (response) {
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

        it("function return given an empty request", function () {
            let sendval: {} = {body : {}};
            return CustomerFunc.handlePremierBenefits(sendval).then(function (response) {
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

    describe('handlePremierApplication', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "994648a5-2a2d-4f0e-9bf3-b7f959720d56",
                    "timestamp": "2017-11-23T00:09:49.97Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "benefit",
                        "action": "search.what.premier.benefits",
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
            return CustomerFunc.handlePremierApplication(sendval).then(function (response) {
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

        it("function return given an empty request", function () {
            let sendval: {} = {body : {}};
            return CustomerFunc.handlePremierApplication(sendval).then(function (response) {
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

    describe('handlePremierEligibility', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "3ac8a776-b2c2-4f6a-af24-648e2aadceab",
                    "timestamp": "2017-11-23T00:16:37.975Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "yes",
                        "action": "search.what.premier.eligible",
                        "actionIncomplete": false,
                        "parameters": {
                            "appointment": "Yes",
                            "min_balance": "No",
                            "qualified_other": "No"
                        },
                        "score": 0.8733612609139993
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success",
                        "webhookTimedOut": false
                    },
                    "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
                }
            };
            return CustomerFunc.handlePremierEligibility(sendval).then(function (response) {
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

        it("function return given an empty request", function () {
            let sendval: {} = {body : {}};
            return CustomerFunc.handlePremierEligibility(sendval).then(function (response) {
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