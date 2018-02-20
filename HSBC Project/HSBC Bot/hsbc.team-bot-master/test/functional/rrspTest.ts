import * as mocha from  'mocha';
import {RrspFunc} from "../../src/rrspFunc";


var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

// ALL OF THIS TEST ARE DONE BLACK BOX
// SINCE TEXT VALUE CHANGE SHOULDN'T CAUSE ERROR
// CHECKS WHETHER THEY RETURN AN OBJECT OF FORM FULFILLMENT RESPONSE

describe('Rrsp Test Script', () => {

    describe('handleDirectRRSP', () => {

        it("function return the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "0a239e87-8d93-411f-a8a0-e9189a717c51",
                    "timestamp": "2017-11-22T22:48:05.256Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "rrsp",
                        "action": "direct.rrsp",
                        "actionIncomplete": false,
                        "parameters": {
                            "rrsp": "rrsp"
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
            return RrspFunc.handleDirectRRSP(sendval).then(function (response) {
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
            return RrspFunc.handleDirectRRSP(sendval).then(function (response) {
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

    describe('handleApplyRRSP', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "2ad3057a-a6fd-4047-a2bf-de89fec9ca8c",
                    "timestamp": "2017-11-22T22:52:44.964Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "apply",
                        "action": "find.how.apply.rrsp",
                        "actionIncomplete": false,
                        "parameters": {
                            "rrsp": ""
                        },
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
            return RrspFunc.handleApplyRRSP(sendval).then(function (response) {
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
            return RrspFunc.handleApplyRRSP(sendval).then(function (response) {
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
                expect.fail();
            })
        });
    });

    describe('handleRRSPBenefits', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "e1f7939c-c7bc-48e8-91ea-21c81f6059e2",
                    "timestamp": "2017-11-22T23:01:08.557Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "benefit",
                        "action": "find.what.rrsp.benefits",
                        "actionIncomplete": false,
                        "parameters": {
                            "rrsp": ""
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
            return RrspFunc.handleRRSPBenefits(sendval).then(function (response) {
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
            return RrspFunc.handleRRSPBenefits(sendval).then(function (response) {
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

    describe('handleRRSPBrokerageYes', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "4bacedbe-b361-4128-878c-662fc9955d01",
                    "timestamp": "2017-11-22T23:08:03.833Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "phone",
                        "action": "find.what.brokerageAccount.yes",
                        "actionIncomplete": false,
                        "parameters": {
                            "contactMethod": "phone",
                            "email": "erwqerwe@gmail.com",
                            "full_name": "Josh",
                            "phoneNumber": "32487913284"
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
            return RrspFunc.handleRRSPBrokerageYes(sendval).then(function (response) {
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
            return RrspFunc.handleRRSPBrokerageYes(sendval).then(function (response) {
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

    describe('handleRRSPBrokerageNo', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "afbcd03d-d470-4e9a-bd0b-e9ffb1bfbbf2",
                    "timestamp": "2017-11-22T23:10:29.588Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "no",
                        "action": "find.what.brokerageAccount.no",
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
            return RrspFunc.handleRRSPBrokerageNo(sendval).then(function (response) {
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
            return RrspFunc.handleRRSPBrokerageNo(sendval).then(function (response) {
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