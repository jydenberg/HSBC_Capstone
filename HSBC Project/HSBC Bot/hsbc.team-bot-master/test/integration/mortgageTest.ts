import * as dotenv from 'dotenv';
dotenv.config();
import {MortFunc} from "../../src/mortgageFunc";

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

describe('HSBC Service Mortgage Functions', () => {

    describe('handleCalculateMortgageMonthly', () => {
        it("function returns given the right request", function () {
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
            return MortFunc.handleCalculateMortgageMonthly(sendval).then(function (response) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                // console.log(response);
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

    describe('handleCalculateRemaining', () => {
        it("function returns given the right request", function () {
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
            return MortFunc.handleCalculateRemaining(sendval).then(function (response) {
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