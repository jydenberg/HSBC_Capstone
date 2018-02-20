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


describe('Black Box Test Script', () => {
    /* format of black box test
    it(' function name', (done) => {
        let sendval: {} = {};
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
    */

    it('handleInputWelcome', (done) => {
        let sendval: {} = {
            "id": "81fdfea6-5eb3-45be-8d00-086804afd517",
            "timestamp": "2017-11-21T17:57:54.081Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "hi",
                "action": "welcome",
                "actionIncomplete": false,
                "parameters": {},
                "contexts": [],
                "metadata": {
                    "intentId": "358bd324-5f20-45a0-8114-d3d776b406a3",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "0_blurb_welcome"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": []
                },
                "score": 1
            },
            "status": {
                "code": 200,
                "errorType": "success",
                "webhookTimedOut": false
            },
            "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
        };
        chai.request(server)
            .post('/dialogflow')
            .send(sendval)
            .auth(user,pass)
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
    //
    it('searchWhereAtmLocation ', (done) => {
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

    it('handleSearchWhereAtmLocation', (done) => {
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

    it('handleSearchWhereAtm ', (done) => {
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

    it('handleFindAtm', (done) => {
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

    it('handleDirectRRSP', (done) => {
        let sendval: {} = {
            "id": "e2fefb5b-55e2-47c9-8d6e-cebf4ee6cb70",
            "timestamp": "2017-11-21T18:13:11.486Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "RRSP",
                "action": "direct.rrsp",
                "actionIncomplete": false,
                "parameters": {
                    "rrsp": "rrsp"
                },
                "contexts": [
                    {
                        "name": "6_find_what_mortgages_preapproval_dialog_context",
                        "parameters": {
                            "promotion_code.original": "",
                            "mortgage_type.original": "rrsp",
                            "email.original": "",
                            "co-applicant.original": "",
                            "promotion_code": "",
                            "rrsp": "rrsp",
                            "last_name": "",
                            "mortgage_type": "rrsp",
                            "phone_num.original": "",
                            "preferred_time": "",
                            "rrsp.original": "RRSP",
                            "co-applicant": "",
                            "last_name.original": "",
                            "first_name.original": "",
                            "preferred_time.original": "",
                            "phone_num": "",
                            "preferred_language.original": "",
                            "first_name": "",
                            "preferred_language": "",
                            "email": ""
                        },
                        "lifespan": 1
                    },
                    {
                        "name": "rrsp",
                        "parameters": {
                            "rrsp.original": "RRSP",
                            "rrsp": "rrsp"
                        },
                        "lifespan": 2
                    },
                    {
                        "name": "a2444740-3aca-4bee-add6-bf4f4d369641_id_dialog_context",
                        "parameters": {
                            "promotion_code.original": "",
                            "mortgage_type.original": "rrsp",
                            "email.original": "",
                            "co-applicant.original": "",
                            "promotion_code": "",
                            "rrsp": "rrsp",
                            "last_name": "",
                            "mortgage_type": "rrsp",
                            "phone_num.original": "",
                            "preferred_time": "",
                            "rrsp.original": "RRSP",
                            "co-applicant": "",
                            "last_name.original": "",
                            "first_name.original": "",
                            "preferred_time.original": "",
                            "phone_num": "",
                            "preferred_language.original": "",
                            "first_name": "",
                            "preferred_language": "",
                            "email": ""
                        },
                        "lifespan": 1
                    }
                ],
                "metadata": {
                    "intentId": "96e4d25f-9db8-40cc-85f9-0a573929bcbd",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "00_direct_RRSP"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": ""
                        },
                        {
                            "type": 0,
                            "speech": ""
                        }
                    ]
                },
                "score": 0.8330846317418222
            },
            "status": {
                "code": 200,
                "errorType": "success",
                "webhookTimedOut": false
            },
            "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
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

    it('handleApplyRRSP ', (done) => {
        let sendval: {} = {
            "id": "206a5c35-369e-4367-b70b-f0b88e21a3d4",
            "timestamp": "2017-11-21T18:25:17.74Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "open rrsp account",
                "action": "find.how.apply.rrsp",
                "actionIncomplete": false,
                "parameters": {
                    "rrsp": "rrsp"
                },
                "contexts": [
                    {
                        "name": "self-directed",
                        "parameters": {
                            "rrsp.original": "rrsp",
                            "rrsp": "rrsp"
                        },
                        "lifespan": 1
                    }
                ],
                "metadata": {
                    "intentId": "69aaadf9-f404-409a-b4d6-feb1d9d96ec4",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "2_find_how_apply_rrsp_rrsp"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "What you need before you start the online application for a self-directed RRSP brokerage account:\n\nSocial Insurance Number\nTwo pieces of valid identification\nBank account information (transit, institution number, account number and bank address)\nSpouse or common-law partner's employment information\n\nWould you like an agent to contact you in order to apply?"
                        },
                        {
                            "type": "simple_response",
                            "platform": "google",
                            "textToSpeech": "What you need before you start the online application for a self-directed RRSP brokerage account:\n\nSocial Insurance Number\nTwo pieces of valid identification\nBank account information (transit, institution number, account number and bank address)\nSpouse or common-law partner's employment information\n\nWould you like an agent to contact you in order to apply?"
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
            "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
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

    it('handleRRSPBenefits ', (done) => {
        let sendval: {} = {
            "id": "5628c665-8fbf-44d1-b1ec-c26b68b1e60b",
            "timestamp": "2017-11-21T18:27:56.867Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "benefit",
                "action": "find.what.rrsp.benefits",
                "actionIncomplete": false,
                "parameters": {
                    "rrsp": ""
                },
                "contexts": [
                    {
                        "name": "rrsp",
                        "parameters": {
                            "rrsp.original": "",
                            "rrsp": ""
                        },
                        "lifespan": 1
                    }
                ],
                "metadata": {
                    "intentId": "af44ffdf-99e7-4768-9184-90171be03263",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "2_find_what_rrspBenefits"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "1 Pay less income tax. Your contribution is deducted directly from your current income, giving you  immediate tax savings.\n\n2 Build your wealth faster. When you contribute regularly throughout the year, you take advantage of the \npower of compound interest. And since income earned within your RRSP is not taxed, your investment     grows even more quickly!\n\n3  Defer your taxes to a lower rate. When you start to withdraw money from your RRSP investment your  \nincome will likely be lower and you’ll pay tax at a lower rate."
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
            "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
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

    it('handleDirectWsf ', (done) => {
        let sendval: {} = {
            "id": "af8fdfba-a489-4b67-ae7f-b3942ae06313",
            "timestamp": "2017-11-21T18:29:49.354Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "WSF",
                "action": "direct.wsf",
                "actionIncomplete": false,
                "parameters": {},
                "contexts": [
                    {
                        "name": "worldselectionfund",
                        "parameters": {},
                        "lifespan": 2
                    }
                ],
                "metadata": {
                    "intentId": "0860198b-b2ef-43dc-a83f-5f1cc36e5307",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "00_directWSF"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "Prepare for your financial future with HSBC World Selection® Portfolio. \n\nThis premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.\n\nWould you like to find out if you are eligible? \nThe advantages of the World Selection Fund? \nOr would you like more information first?"
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
            "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
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

    it('handleEligibilityWSF ', (done) => {
        let sendval: {} = {
            "id": "0e35a04b-ac9b-4590-a42f-3dbf00f29f31",
            "timestamp": "2017-11-21T18:31:27.888Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "eligible",
                "action": "find.what.wsf.eligible",
                "actionIncomplete": false,
                "parameters": {},
                "contexts": [
                    {
                        "name": "worldselectionfund",
                        "parameters": {},
                        "lifespan": 1
                    }
                ],
                "metadata": {
                    "intentId": "c318e7fd-6bcb-47dd-b2c2-84677e2132af",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "4_find_what_WorldSelection1_eligibility"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "In order to be eligible, you will need:\n\n\nA Minimum initial investment of $50,000...\nA Subsequent lump-sum investments from $500...\nTo Contribute from $250 in a regular savings plan\"\n\nWould you like to find out more? Or would you like to return to main menu?"
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
            "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
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

    it('handleWsfMore ', (done) => {
        let sendval: {} = {
            "id": "0acadc84-78dc-480a-acb5-2b21a06582fa",
            "timestamp": "2017-11-21T18:33:22.854Z",
            "lang": "en",
            "result": {
                "source": "agent",
                "resolvedQuery": "More info",
                "action": "find.what.wsf.more",
                "actionIncomplete": false,
                "parameters": {},
                "contexts": [
                    {
                        "name": "worldselectionfund",
                        "parameters": {},
                        "lifespan": 1
                    }
                ],
                "metadata": {
                    "intentId": "b952d2ff-ad65-4827-85f3-417752cf0830",
                    "webhookUsed": "true",
                    "webhookForSlotFillingUsed": "false",
                    "intentName": "4_find_what_WorldSelection1_moreInfo"
                },
                "fulfillment": {
                    "speech": "",
                    "messages": [
                        {
                            "type": 0,
                            "platform": "facebook",
                            "speech": "\"Every investor has different goals, attitudes towards risk, and amounts to invest.\" \n\nThese can influence how you invest. Most people tend to fall into one of these investor types:\n\nConservative\nModerate Conservative\nBalanced\nGrowth\nAggressive Growth\n\nWould you like to find out more about the different investor types or would you like to..."
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
            "sessionId": "ecd93a31-61cd-4dcc-a62f-758e8103cd80"
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