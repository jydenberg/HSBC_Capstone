import * as mocha from  'mocha';
import {AtmFunc} from "../../src/atmFunc";


var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

// ALL OF THIS TEST ARE DONE BLACK BOX
// SINCE TEXT VALUE CHANGE SHOULDN'T CAUSE ERROR
// CHECKS WHETHER THEY RETURN AN OBJECT OF FORM FULFILLMENT RESPONSE

describe('Atm Test Script', () => {

    describe('handleFindAtm', () => {

        it("function return a fulfillment response with the right request", function () {
            let sendval: {} = {
                body : {
                    "id": "968ef385-735a-479e-99d5-426e6fcffe8a",
                    "timestamp": "2017-11-23T15:38:19.298Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "Find an ATM location",
                        "action": "find.where.atm",
                        "actionIncomplete": false,
                        "parameters": {
                            "city": "Vancouver"
                        },
                        "score": 0.8665100746194287
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success",
                        "webhookTimedOut": false
                    },
                    "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
                }
            };
            return AtmFunc.handleFindAtm(sendval).then(function (response) {
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

    describe('handleSearchWhereAtm', () => {

        it("function return a fulfillment response given a city", function () {
            let sendval: {} = {
                body: {
                    "id": "4f9af6fa-a649-4e42-96a8-782599b8976e",
                    "timestamp": "2017-11-23T15:46:29.067Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "atm burnaby",
                        "action": "search.where.atm",
                        "actionIncomplete": false,
                        "parameters": {
                            "local_cities": "Burnaby"
                        },
                        "score": 0.7524999166699999
                    },
                    "status": {
                        "code": 200,
                        "errorType": "success",
                        "webhookTimedOut": false
                    },
                    "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
                }
            };
            return AtmFunc.handleFindAtm(sendval).then(function (response) {
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

    describe('permission Atm', () => {

        it("function return a user location prompt given no parameter ", function () {
            let sendval: {} = {
                body : {
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
                                            "query": "atm close",
                                            "inputType": "KEYBOARD"
                                        }
                                    ],
                                    "arguments": [
                                        {
                                            "rawText": "atm close",
                                            "textValue": "atm close",
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
                                "conversationId": "1509893405615",
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
                    "id": "b3f72606-d172-4135-b8e8-a6a9d93c5e36",
                    "timestamp": "2017-11-05T14:50:23.697Z",
                    "lang": "en-us",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "atm close",
                        "speech": "",
                        "action": "search.where.atm.permission",
                        "actionIncomplete": false,
                        "parameters": {},
                        "contexts": [
                            {
                                "name": "actions_capability_screen_output",
                                "parameters": {
                                    "city": "user-location",
                                    "city.original": ""
                                },
                                "lifespan": 0
                            },
                            {
                                "name": "actions_capability_audio_output",
                                "parameters": {
                                    "city": "user-location",
                                    "city.original": ""
                                },
                                "lifespan": 0
                            },
                            {
                                "name": "google_assistant_input_type_keyboard",
                                "parameters": {
                                    "city": "user-location",
                                    "city.original": ""
                                },
                                "lifespan": 0
                            }
                        ],
                        "metadata": {
                            "intentId": "cb193fc5-dc2f-4c07-8322-258ae500648d",
                            "webhookUsed": "true",
                            "webhookForSlotFillingUsed": "false",
                            "nluResponseTime": 19,
                            "intentName": "1_search_where_atm_byUserLocation_send"
                        },
                        "fulfillment": {
                            "speech": "",
                            "messages": [
                                {
                                    "type": 1,
                                    "platform": "facebook",
                                    "imageUrl": "https://maps.googleapis.com/maps/api/staticmap?center=Vancouver&zoom=13&size=800x600&maptype=roadmap",
                                    "buttons": []
                                },
                                {
                                    "type": 0,
                                    "platform": "facebook",
                                    "speech": "Your closest ATM is at addressX (returned by webhook)"
                                },
                                {
                                    "type": "simple_response",
                                    "platform": "google",
                                    "textToSpeech": "Your closest ATM is at addressX (returned by webhook)"
                                },
                                {
                                    "type": "basic_card",
                                    "platform": "google",
                                    "image": {
                                        "url": "https://maps.googleapis.com/maps/api/staticmap?center=Vancouver&zoom=13&size=800x600&maptype=roadmap"
                                    },
                                    "buttons": []
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
                        "errorType": "success",
                        "webhookTimedOut": false
                    },
                    "sessionId": "1509893405615"
                }
            };
            return AtmFunc.permissionAtm(sendval).then(function (response) {
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


    describe('handleSearchWhereAtmLocation', () => {

        it("function return atm near user ", function () {
            let sendval: {} = {
                body : {
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
                                        "query": "yes",
                                        "inputType": "VOICE"
                                    }
                                ],
                                "arguments": [
                                    {
                                        "textValue": "true",
                                        "name": "PERMISSION"
                                    }
                                ],
                                "intent": "actions.intent.PERMISSION"
                            }
                        ],
                        "user": {
                            "permissions": [
                                "NAME",
                                "DEVICE_PRECISE_LOCATION"
                            ],
                            "profile": {
                                "displayName": "Winson Soewandibio",
                                "givenName": "Winson",
                                "familyName": "Soewandibio"
                            },
                            "locale": "en-US",
                            "userId": "ABwppHGmugMe2ygjSH8W8cMzlHJc7VAas8a9inbXCA9edDFmdjPkjN043pauw68axn7Rj6JQrlHYyzPbRQ"
                        },
                        "device": {
                            "location": {
                                "coordinates": {
                                    "latitude": 49.2378333,
                                    "longitude": -123.0411864
                                }
                            }
                        },
                        "conversation": {
                            "conversationId": "1509893405615",
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
                "id": "3fc53642-1a5f-4f51-b8e2-c6e14a4c3623",
                "timestamp": "2017-11-05T14:50:30.321Z",
                "lang": "en-us",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "actions_intent_PERMISSION",
                    "speech": "",
                    "action": "actions.intent.PERMISSION",
                    "actionIncomplete": false,
                    "parameters": {},
                    "metadata": {
                        "intentId": "16b6cce9-08ff-4ee0-89fa-fbc29e9e0655",
                        "webhookUsed": "true",
                        "webhookForSlotFillingUsed": "false",
                        "nluResponseTime": 2,
                        "intentName": "1_search_where_atm_byUserLocation_received"
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
                "sessionId": "1509893405615"
                }
            };
            return AtmFunc.handleSearchWhereAtmLocation(sendval).then(function (response) {
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
        })

    });

});