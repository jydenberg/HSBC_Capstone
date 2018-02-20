import {WsfFunc} from "../../src/wsfFunc";

import * as mocha from  'mocha';


var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

// ALL OF THIS TEST ARE DONE BLACK BOX
// SINCE TEXT VALUE CHANGE SHOULDN'T CAUSE ERROR
// CHECKS WHETHER THEY RETURN AN OBJECT OF FORM FULFILLMENT RESPONSE

describe('Wsf Test Script', () => {


    describe('handleDirectWsf', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "af8fdfba-a489-4b67-ae7f-b3942ae06313",
                    "timestamp": "2017-11-21T18:29:49.354Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "WSF",
                        "action": "direct.wsf",
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

            return WsfFunc.handleDirectWsf(sendval).then(function (response) {
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

        it("function returns given an empty request", function () {
            let sendval: {} = {body : {}};

            return WsfFunc.handleDirectWsf(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //expect.fail();
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

    describe('handleEligibilityWSF', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "76288a23-82af-4da9-8259-bc18aaf3eea5",
                    "timestamp": "2017-11-22T22:07:46.236Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "eligibility",
                        "action": "find.what.wsf.eligible",
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
            return WsfFunc.handleEligibilityWSF(sendval).then(function (response) {
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
            return WsfFunc.handleEligibilityWSF(sendval).then(function (response) {
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

    describe('handleWsfMore', () => {

        it("function returns given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "eb425a35-8b3a-4718-b4d8-c22144f25c1d",
                    "timestamp": "2017-11-23T18:08:43.159Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "more",
                        "action": "find.what.wsf.more",
                        "actionIncomplete": false,
                        "parameters": {},
                        "score": 0.5899999737739563
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success",
                        "webhookTimedOut": false
                    },
                    "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
                }
            };
            return WsfFunc.handleWsfMore(sendval).then(function (response) {
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
            return WsfFunc.handleWsfMore(sendval).then(function (response) {
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

    describe('handleWsfAdvantages', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "d9357b4f-6265-49fc-8b2a-12919f90ee34",
                    "timestamp": "2017-11-22T22:22:20.647Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "advantages",
                        "action": "find.what.wsf.advantages",
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
            return WsfFunc.handleWsfAdvantages(sendval).then(function (response) {
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
            let sendval: {} = {body :{}};
            return WsfFunc.handleWsfAdvantages(sendval).then(function (response) {
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

    describe('handleWsfNo', () => {

        it("function return given the right request", function () {
            let sendval: {} = {
                body: {
                    "id": "bd1adb6f-9c13-4439-94b9-85c99f8015b9",
                    "timestamp": "2017-11-22T22:27:10.704Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "no",
                        "action": "find.what.wsf.no",
                        "actionIncomplete": false,
                        "parameters": {
                            "yes_no": "No"
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
            return WsfFunc.handleWsfNo(sendval).then(function (response) {
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
            let sendval: {} = {body: {}};
            return WsfFunc.handleWsfNo(sendval).then(function (response) {
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
            });
        });
    });
});