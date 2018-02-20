import * as mocha from  'mocha';
import {Exchange} from "../../src/Exchange";

import * as dotenv from 'dotenv';
dotenv.config();


var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

describe('Exchange Test Script', () => {

    describe('findExchangeRate', () => {

        it("function return a fulfillment response with the right request", function () {
            let sendval: {} = {

                body : {
                    "id": "e4b66a67-cdb9-4512-9f17-967aef6ed495",
                    "timestamp": "2017-11-23T14:04:20.925Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "exchange",
                        "action": "find.what.exchangeRate",
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
            return Exchange.findExchangeRate(sendval).then(function (response) {

                // use if return fulfillment response
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                // response.should.be.a('object');
                // response.should.have.property('speech');
                // response.speech.should.be.a('string');
                // response.should.have.property('displayText');
                // response.displayText.should.be.a('string');
                // response.should.have.property('data');
                // response.data.should.be.a('object');
                // response.should.have.property('contextOut');
                // response.contextOut.should.be.a('array');
                // response.should.have.property('source');
                // response.source.should.be.a('string');
                expect(response).to.be.a('string');
                response.should.not.eql("");

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

    });

    describe('searchWhatExchangeRate', () => {

        it("function return a fulfillment response with the all parameter", function () {
            let sendval: {} = {
                body : {
                    "id": "d9b201e7-ea0d-461b-8cd7-22e05e873659",
                    "timestamp": "2017-11-23T14:36:37.989Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "convert 100 usd to cad",
                        "action": "search.what.exchangeRate",
                        "actionIncomplete": false,
                        "parameters": {
                            "amount": 100,
                            "currency_from": "USD",
                            "currency_into": "CAD"
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
            return Exchange.searchWhatExchangeRate(sendval).then(function (response) {

                // use if return fulfillment response
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                // response.should.be.a('object');
                // response.should.have.property('speech');
                // response.speech.should.be.a('string');
                // response.should.have.property('displayText');
                // response.displayText.should.be.a('string');
                // response.should.have.property('data');
                // response.data.should.be.a('object');
                // response.should.have.property('contextOut');
                // response.contextOut.should.be.a('array');
                // response.should.have.property('source');
                // response.source.should.be.a('string');
                expect(response).to.be.a('string');
                response.should.not.eql("");

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function return a fulfillment response with the only currency_from and into parameter", function () {
            let sendval: {} = {
                body : {
                    "id": "d54796c8-aa85-4f92-899d-c9bac2bd7312",
                    "timestamp": "2017-11-23T14:43:41.154Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "GBP",
                        "action": "search.what.exchangeRate",
                        "actionIncomplete": false,
                        "parameters": {
                            "amount": "",
                            "currency_from": "CNY",
                            "currency_into": "GBP"
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
            return Exchange.searchWhatExchangeRate(sendval).then(function (response) {

                // use if return fulfillment response
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                // response.should.be.a('object');
                // response.should.have.property('speech');
                // response.speech.should.be.a('string');
                // response.should.have.property('displayText');
                // response.displayText.should.be.a('string');
                // response.should.have.property('data');
                // response.data.should.be.a('object');
                // response.should.have.property('contextOut');
                // response.contextOut.should.be.a('array');
                // response.should.have.property('source');
                // response.source.should.be.a('string');
                expect(response).to.be.a('string');
                response.should.not.eql("");

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function return a fulfillment response with the only currency_into parameter", function () {
            let sendval: {} = {

                body : {
                    "id": "d54796c8-aa85-4f92-899d-c9bac2bd7312",
                    "timestamp": "2017-11-23T14:43:41.154Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "GBP",
                        "action": "search.what.exchangeRate",
                        "actionIncomplete": false,
                        "parameters": {
                            "amount": "",
                            "currency_from": "",
                            "currency_into": "GBP"
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
            return Exchange.searchWhatExchangeRate(sendval).then(function (response) {

                // use if return fulfillment response
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                // response.should.be.a('object');
                // response.should.have.property('speech');
                // response.speech.should.be.a('string');
                // response.should.have.property('displayText');
                // response.displayText.should.be.a('string');
                // response.should.have.property('data');
                // response.data.should.be.a('object');
                // response.should.have.property('contextOut');
                // response.contextOut.should.be.a('array');
                // response.should.have.property('source');
                // response.source.should.be.a('string');
                expect(response).to.be.a('string');
                response.should.not.eql("");
            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function return a fulfillment response with negative amount parameter", function () {
            let sendval: {} = {
                body : {
                    "id": "d9b201e7-ea0d-461b-8cd7-22e05e873659",
                    "timestamp": "2017-11-23T14:36:37.989Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "convert -100 usd to cad",
                        "action": "search.what.exchangeRate",
                        "actionIncomplete": false,
                        "parameters": {
                            "amount": -100,
                            "currency_from": "USD",
                            "currency_into": "CAD"
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
            return Exchange.searchWhatExchangeRate(sendval).then(function (response) {

                // use if return fulfillment response
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                // response.should.be.a('object');
                // response.should.have.property('speech');
                // response.speech.should.be.a('string');
                // response.should.have.property('displayText');
                // response.displayText.should.be.a('string');
                // response.should.have.property('data');
                // response.data.should.be.a('object');
                // response.should.have.property('contextOut');
                // response.contextOut.should.be.a('array');
                // response.should.have.property('source');
                // response.source.should.be.a('string');
                expect(response).to.be.a('string');
                response.should.not.eql("");

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function return a fulfillment response with invalid currency_from parameter", function () {
            let sendval: {} = {
                body : {
                    "id": "7cc392a7-159a-4d61-80f4-0c3bca4a1574",
                    "timestamp": "2017-11-23T14:54:12.669Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "GBP",
                        "action": "search.what.exchangeRate",
                        "actionIncomplete": false,
                        "parameters": {
                            "amount": "",
                            "currency_from": "AAA",
                            "currency_into": "GBP"
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
            return Exchange.searchWhatExchangeRate(sendval).then(function (response) {

                // use if return fulfillment response
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                // response.should.be.a('object');
                // response.should.have.property('speech');
                // response.speech.should.be.a('string');
                // response.should.have.property('displayText');
                // response.displayText.should.be.a('string');
                // response.should.have.property('data');
                // response.data.should.be.a('object');
                // response.should.have.property('contextOut');
                // response.contextOut.should.be.a('array');
                // response.should.have.property('source');
                // response.source.should.be.a('string');
                expect(response).to.be.a('string');
                response.should.not.eql("");

            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

    });




});