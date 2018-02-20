import * as mocha from  'mocha';
import {Calculator} from "../../src/Calculator";

import * as dotenv from 'dotenv';
dotenv.config();

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

describe('Calculator Test Script', () => {

    describe('mortgageCalculatorMonthlyPayment', () => {

        it("function return a string response with all appropriate parameters", function () {
            let sendval: {} = {

                body : {
                    "id": "8098415c-1c86-47ac-9890-836cdb4e244f",
                    "timestamp": "2017-11-23T16:04:35.992Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "5",
                        "action": "find.how.mortgages.calculate.monthlyPayment",
                        "actionIncomplete": false,
                        "parameters": {
                            "interestRate": 3,
                            "loanAmount": 100000,
                            "loanDuration": "5"
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
            return Calculator.mortgageCalculatorMonthlyPayment(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('string');
                expect(response).to.equal("Your monthly payment should be 1796.87");



            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function return an error string response with all negative parameters", function () {
            let sendval: {} = {

                body : {
                    "id": "954eb274-85ba-4dba-9eaf-ffcf8b93bd00",
                    "timestamp": "2017-11-23T16:17:11.913Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "-5",
                        "action": "find.how.mortgages.calculate.monthlyPayment",
                        "actionIncomplete": false,
                        "parameters": {
                            "interestRate": -9,
                            "loanAmount": -1000,
                            "loanDuration": "-5"
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
            return Calculator.mortgageCalculatorMonthlyPayment(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                //response.should.be.a('string');
                expect.fail();


            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                err.should.be.a('string');
                //expect.fail();
            })
        });

    });


    describe('mortgageCalculatorRemainingPayment', () => {

        it("function return a string response with all appropriate parameters", function () {
            let sendval: {} = {
                body : {
                    "id": "b42db12f-3b90-4d84-a075-b5c021eddf98",
                    "timestamp": "2017-11-23T16:23:54.454Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "10",
                        "action": "find.how.mortgages.calculate.remainingLoan",
                        "actionIncomplete": false,
                        "parameters": {
                            "interestRate": 3,
                            "loanAmount": 100000,
                            "loanDuration": "5",
                            "numberPayments": 10
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
            return Calculator.mortgageCalculatorRemainingPayment(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                response.should.be.a('string');
                expect(response).to.equal("total amount remaining to pay is  84356.12");



            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

        it("function return a error string response with all negative parameters", function () {
            let sendval: {} = {
                body : {
                    "id": "b42db12f-3b90-4d84-a075-b5c021eddf98",
                    "timestamp": "2017-11-23T16:23:54.454Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "10",
                        "action": "find.how.mortgages.calculate.remainingLoan",
                        "actionIncomplete": false,
                        "parameters": {
                            "interestRate": -3,
                            "loanAmount": -100000,
                            "loanDuration": "-5",
                            "numberPayments": -10
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
            return Calculator.mortgageCalculatorRemainingPayment(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                //console.log(response);
                expect.fail();



            }).catch(function (err) {
                // Log.test('Error: ' + JSON.stringify(err));
                err.should.be.a('string');
            })
        });

    });
});