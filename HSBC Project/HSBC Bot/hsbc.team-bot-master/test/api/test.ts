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


       describe('POST/dialogflow ATM func', () => {
            it('PASS: permissionAtm ', (done) => {
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
                        "parameters": {
                            "city": "user-location"
                        },
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
                        "errorType": "success"
                    },
                    "sessionId": "1509893405615"
                };
                chai.request(server)
                    .post('/dialogflow')
                    .auth(user,pass)
                    .send(sendval)
                    .end((err, res) => {
                        //console.log(res);
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


            it('PASS: handleSearchWhereAtmLocation', (done) => {
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
                        "contexts": [
                            {
                                "name": "actions_capability_screen_output",
                                "parameters": {},
                                "lifespan": 0
                            },
                            {
                                "name": "actions_intent_permission",
                                "parameters": {
                                    "PERMISSION": "true"
                                },
                                "lifespan": 0
                            },
                            {
                                "name": "google_assistant_input_type_voice",
                                "parameters": {},
                                "lifespan": 0
                            },
                            {
                                "name": "actions_capability_audio_output",
                                "parameters": {},
                                "lifespan": 0
                            }
                        ],
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


            it('PASS: handleSearchWhereAtm ', (done) => {
                let sendval: {} = {
                    "id": "41d1a81f-9388-45b1-b490-2b72a9315499",
                    "timestamp": "2017-11-05T14:24:07.153Z",
                    "lang": "en",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "ATM Burnaby",
                        "speech": "",
                        "action": "search.where.atm",
                        "actionIncomplete": false,
                        "parameters": {
                            "city": "Burnaby"
                        },
                        "contexts": [],
                        "metadata": {
                            "intentId": "a4ea2738-1f71-48c2-9f65-6e1af1eaf433",
                            "webhookUsed": "true",
                            "webhookForSlotFillingUsed": "false",
                            "intentName": "1_search_where_atm"
                        },
                        "fulfillment": {
                            "speech": "",
                            "messages": [
                                {
                                    "type": 1,
                                    "platform": "facebook",
                                    "title": "$geo-city",
                                    "imageUrl": "https://maps.googleapis.com/maps/api/staticmap?center=$geo-city&zoom=13&size=800x600&maptype=roadmap",
                                    "buttons": []
                                },
                                {
                                    "type": "simple_response",
                                    "platform": "google",
                                    "textToSpeech": "webhook returns a map for text surface, and an address for voice surface"
                                },
                                {
                                    "type": "basic_card",
                                    "platform": "google",
                                    "title": "$geo-city",
                                    "image": {
                                        "url": "https://maps.googleapis.com/maps/api/staticmap?center=$geo-city&zoom=13&size=800x600&maptype=roadmap"
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

            it('PASS: handleFindAtm', (done) => {
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
                                            "query": "ATMs",
                                            "inputType": "KEYBOARD"
                                        }
                                    ],
                                    "arguments": [
                                        {
                                            "rawText": "ATMs",
                                            "textValue": "ATMs",
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
                                "conversationId": "1509894128939",
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
                    "id": "f601160b-be0f-4d70-9092-77c43c451ea9",
                    "timestamp": "2017-11-05T15:02:13.449Z",
                    "lang": "en-us",
                    "result": {
                        "source": "agent",
                        "resolvedQuery": "ATMs",
                        "speech": "",
                        "action": "find.atm",
                        "actionIncomplete": false,
                        "parameters": {
                            "city": "all"
                        },
                        "contexts": [
                            {
                                "name": "actions_capability_screen_output",
                                "parameters": {
                                    "city": "all",
                                    "city.original": ""
                                },
                                "lifespan": 0
                            },
                            {
                                "name": "atm",
                                "parameters": {
                                    "city": "all",
                                    "city.original": ""
                                },
                                "lifespan": 1
                            },
                            {
                                "name": "actions_capability_audio_output",
                                "parameters": {
                                    "city": "all",
                                    "city.original": ""
                                },
                                "lifespan": 0
                            },
                            {
                                "name": "google_assistant_input_type_keyboard",
                                "parameters": {
                                    "city": "all",
                                    "city.original": ""
                                },
                                "lifespan": 0
                            }
                        ],
                        "metadata": {
                            "intentId": "3cd416a4-1255-47c7-b5d7-a01d8f4455f7",
                            "webhookUsed": "true",
                            "webhookForSlotFillingUsed": "false",
                            "nluResponseTime": 16,
                            "intentName": "1_find_where_atm"
                        },
                        "fulfillment": {
                            "speech": "",
                            "messages": [
                                {
                                    "type": "simple_response",
                                    "platform": "google",
                                    "textToSpeech": "Would you like to find an ATM in Richmond, New West, North Van, West Van, or Burnaby?\nOr would you like to find the closest one to you?"
                                },
                                {
                                    "type": "basic_card",
                                    "platform": "google",
                                    "title": "ATM",
                                    "subtitle": "",
                                    "formattedText": "",
                                    "image": {
                                        "url": "https://storage.googleapis.com/hello_init/chat_trial_images/atm_map_all.png"
                                    },
                                    "buttons": [
                                        {
                                            "title": "map",
                                            "openUrlAction": {
                                                "url": "https://storage.googleapis.com/hello_init/chat_trial_images/atm_map_all.png"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": 1,
                                    "platform": "facebook",
                                    "imageUrl": "https://storage.googleapis.com/hello_init/chat_trial_images/atm_map_all.png",
                                    "buttons": []
                                },
                                {
                                    "type": 0,
                                    "platform": "facebook",
                                    "speech": "Would you like to find an ATM in Richmond, New West, North Van, West Van, or Burnaby?\nOr would you like to find the closest one to you?"
                                },
                                {
                                    "type": 0,
                                    "platform": "facebook",
                                    "speech": "https://storage.googleapis.com/hello_init/chat_trial_images/atm_map_all.png"
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
                    "sessionId": "1509894128939"
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

    describe('General Test Script (Black Box)', () => {

        describe('POST/dialogflow ATM func', () => {
            it('PASS: permissionAtm ', (done) => {
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
                        "parameters": {
                            "city": "user-location"
                        },
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
                        "errorType": "success"
                    },
                    "sessionId": "1509893405615"
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


            it('PASS: handleSearchWhereAtmLocation', (done) => {
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
                        "contexts": [
                            {
                                "name": "actions_capability_screen_output",
                                "parameters": {},
                                "lifespan": 0
                            },
                            {
                                "name": "actions_intent_permission",
                                "parameters": {
                                    "PERMISSION": "true"
                                },
                                "lifespan": 0
                            },
                            {
                                "name": "google_assistant_input_type_voice",
                                "parameters": {},
                                "lifespan": 0
                            },
                            {
                                "name": "actions_capability_audio_output",
                                "parameters": {},
                                "lifespan": 0
                            }
                        ],
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


            it('PASS: handleSearchWhereAtm ', (done) => {
            let sendval: {} = {
                "id": "41d1a81f-9388-45b1-b490-2b72a9315499",
                "timestamp": "2017-11-05T14:24:07.153Z",
                "lang": "en",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "ATM Burnaby",
                    "speech": "",
                    "action": "search.where.atm",
                    "actionIncomplete": false,
                    "parameters": {
                        "city": "Burnaby"
                    },
                    "contexts": [],
                    "metadata": {
                        "intentId": "a4ea2738-1f71-48c2-9f65-6e1af1eaf433",
                        "webhookUsed": "true",
                        "webhookForSlotFillingUsed": "false",
                        "intentName": "1_search_where_atm"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": 1,
                                "platform": "facebook",
                                "title": "$geo-city",
                                "imageUrl": "https://maps.googleapis.com/maps/api/staticmap?center=$geo-city&zoom=13&size=800x600&maptype=roadmap",
                                "buttons": []
                            },
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "webhook returns a map for text surface, and an address for voice surface"
                            },
                            {
                                "type": "basic_card",
                                "platform": "google",
                                "title": "$geo-city",
                                "image": {
                                    "url": "https://maps.googleapis.com/maps/api/staticmap?center=$geo-city&zoom=13&size=800x600&maptype=roadmap"
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

            it('PASS: handleFindAtm', (done) => {
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
                                        "query": "ATMs",
                                        "inputType": "KEYBOARD"
                                    }
                                ],
                                "arguments": [
                                    {
                                        "rawText": "ATMs",
                                        "textValue": "ATMs",
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
                            "conversationId": "1509894128939",
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
                "id": "f601160b-be0f-4d70-9092-77c43c451ea9",
                "timestamp": "2017-11-05T15:02:13.449Z",
                "lang": "en-us",
                "result": {
                    "source": "agent",
                    "resolvedQuery": "ATMs",
                    "speech": "",
                    "action": "find.atm",
                    "actionIncomplete": false,
                    "parameters": {
                        "city": "all"
                    },
                    "contexts": [
                        {
                            "name": "actions_capability_screen_output",
                            "parameters": {
                                "city": "all",
                                "city.original": ""
                            },
                            "lifespan": 0
                        },
                        {
                            "name": "atm",
                            "parameters": {
                                "city": "all",
                                "city.original": ""
                            },
                            "lifespan": 1
                        },
                        {
                            "name": "actions_capability_audio_output",
                            "parameters": {
                                "city": "all",
                                "city.original": ""
                            },
                            "lifespan": 0
                        },
                        {
                            "name": "google_assistant_input_type_keyboard",
                            "parameters": {
                                "city": "all",
                                "city.original": ""
                            },
                            "lifespan": 0
                        }
                    ],
                    "metadata": {
                        "intentId": "3cd416a4-1255-47c7-b5d7-a01d8f4455f7",
                        "webhookUsed": "true",
                        "webhookForSlotFillingUsed": "false",
                        "nluResponseTime": 16,
                        "intentName": "1_find_where_atm"
                    },
                    "fulfillment": {
                        "speech": "",
                        "messages": [
                            {
                                "type": "simple_response",
                                "platform": "google",
                                "textToSpeech": "Would you like to find an ATM in Richmond, New West, North Van, West Van, or Burnaby?\nOr would you like to find the closest one to you?"
                            },
                            {
                                "type": "basic_card",
                                "platform": "google",
                                "title": "ATM",
                                "subtitle": "",
                                "formattedText": "",
                                "image": {
                                    "url": "https://storage.googleapis.com/hello_init/chat_trial_images/atm_map_all.png"
                                },
                                "buttons": [
                                    {
                                        "title": "map",
                                        "openUrlAction": {
                                            "url": "https://storage.googleapis.com/hello_init/chat_trial_images/atm_map_all.png"
                                        }
                                    }
                                ]
                            },
                            {
                                "type": 1,
                                "platform": "facebook",
                                "imageUrl": "https://storage.googleapis.com/hello_init/chat_trial_images/atm_map_all.png",
                                "buttons": []
                            },
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "Would you like to find an ATM in Richmond, New West, North Van, West Van, or Burnaby?\nOr would you like to find the closest one to you?"
                            },
                            {
                                "type": 0,
                                "platform": "facebook",
                                "speech": "https://storage.googleapis.com/hello_init/chat_trial_images/atm_map_all.png"
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
                "sessionId": "1509894128939"
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


});