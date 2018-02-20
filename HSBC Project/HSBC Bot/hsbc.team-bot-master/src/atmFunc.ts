// <reference path="../node_modules/@types/googlemaps/index.d.ts" />

import {FulfillmentResponse, ContentObject} from './contracts';
import {Convo_Components} from './ConversationComponents';
import {Images} from './imageLibrary';
import {Content} from './contentObject';

import * as https from 'https';
const gmKey : any = process.env.GOOGLE_MAPS_API_KEY;

export namespace AtmFunc {
    export function handleFindAtm(req: any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            let result : Promise<FulfillmentResponse>;
            if (!req.body.result) {
                result = Convo_Components.returnSimpleResponse("I'm sorry. That is not something I can help you with.");
                resolve(result);

            }
            result = Convo_Components.createUtterance(req, Content.findATM);
            resolve(result);
        });
    }
    export function handleSearchWhereAtm(req: any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            if (!req.body.result) {
                let result = Convo_Components.returnSimpleResponse("I'm sorry. That is not something I can help you with. Would you still like to search for an ATM?");
                resolve(result);

            }

            let city = req.body.result.parameters["local_cities"];

            searchWhereAtmKeyword(city).then(cityArray => {

                //create suggestions with every city except for current one
                let allCities: Array<string> = ["Vancouver", "West Vancouver", "North Vancouver", "New Westminster", "Burnaby", "Coquitlam", "Richmond"];
                let suggestions = [];

                const index = allCities.indexOf(city);
                allCities.splice(index, 1);

                for (let aCity in allCities) {
                    suggestions.push({"title": allCities[aCity]});
                }


                let result: Promise<FulfillmentResponse>;
                let contentObj: ContentObject = Content.searchATM;


                contentObj.title = city;
                contentObj.speech = "Here are the atm's in your city " + cityArray.toString();
                contentObj.imageURL = Images.getCityImage(city);
                contentObj.suggestions = suggestions;
                contentObj.buttonURL = ["https://www.google.ca/maps/search/hsbc+" + encodeURIComponent(city)];
                console.log("my buttonURL is " + contentObj.buttonURL[0]);
                result = Convo_Components.createUtterance(req, contentObj);

                resolve(result);

            });
        });
    }
    export function handleSearchWhereAtmLocation(req: any): Promise<FulfillmentResponse> {
        return new Promise<FulfillmentResponse>((resolve, reject) => {
            if (!req.body.result) {
                let result = Convo_Components.returnSimpleResponse("I'm sorry. That is not something I can help you with. Would you still like to search for an ATM?");
                resolve(result);

            }


            searchWhereAtmLocation(req).then(cityArray => {
                //console.log(req.body);

                let result = Convo_Components.createUtterance(req, cityArray.toString());

                resolve(result);

            });
        });
    }

    export function searchWhereAtmLocation(req:any): Promise<any> {

        return new Promise<any>((resolve, reject) => {
            var latIn;
            var lonIn;
            try {
                latIn = req.body.originalRequest.data.device.location.coordinates.latitude;
                lonIn = req.body.originalRequest.data.device.location.coordinates.longitude;
                //console.log(latIn);
                //console.log(lonIn);
            } catch (err) {
                resolve(err);
            }


            searchLocHelper(latIn,lonIn).then(retval => {
                resolve(retval);
            }).catch(error => {
                resolve(error);
            });
        })
    }
    //  Input: Lat and Lon of user location
    //  OUTPUT: the 10 closest HSBC atm locations
    export function searchLocHelper(latIn,lonIn): Promise<any> {

        return new Promise((resolve, reject) => {
            let apiURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latIn + "," + lonIn + "&radius=10000&keyword=HSBC+atm&key=" + gmKey;
            getHelper(apiURL).then(retval => {
                let retarray: string[] = [];

                for (let i = 0; i < retval.results.length && i<3; i++){ // can adjust max i to give more return values
                    retarray.push(retval.results[i].vicinity);
                }
                resolve(retarray);
            }).catch(error => {
                reject(error);
            });
        })
    }




    //INPUT: Keyword of some location passed by diagflow (this can be a google search string, postal code, ETC)
    //OUTPUT: 10 closest ATMS based off of keyword passed
    export function searchWhereAtmKeyword(keyword: any): Promise<any> {
        return new Promise((resolve, reject) => {
            findLocbyKeyword(keyword).then( locval => {
                let placeid : string = locval.results[0].place_id;

                getGeoDetails(placeid).then ( location => {

                    let lat  = location.result.geometry.location.lat;
                    let long  = location.result.geometry.location.lng;
                    //we will have to see what search is more acurate - rankby and radius are slightly different
                    let apiURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&rankby=distance&keyword=HSBC+atm&key=" + gmKey;
                    // let apiURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long + "&radius=15000&keyword=HSBC+atm&key=" + gmKey;

                    getHelper(apiURL).then(retval => {
                        let retarray: string[] = [];
                        for (let i = 0; i < retval.results.length && i<3; i++){ // can adjust max i to give more return values
                            retarray.push(retval.results[i].vicinity);
                        }
                        resolve(retarray);
                    });
                });
            }).catch(error => {
                reject(error);
            });
        });
    }







    //INPUT: Keyword you want helper to find
    //OUTPUT: Google Map token for that keyword
    export function findLocbyKeyword(keyword : string) : Promise<any> {
        return new Promise((resolve, reject) => {
            //let apiURL = `${this.apiRoot}?term=${term};
            let apiURL : string = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + keyword + "&key=" + gmKey;
            getHelper(apiURL).then( retval => {
                resolve(retval);
            }).catch(error => {
                reject(error);
            });
        });

    }

    //INPUT:Google Place ID
    //OUTPUT: Details of that place ID
    export function getGeoDetails(placeid : string): Promise<any> {
        return new Promise((resolve, reject) => {
            //let apiURL = `${this.apiRoot}?term=${term};
            let apiURL = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeid + "&key=" + gmKey;;

            getHelper(apiURL).then( retval => {
                // console.log(retval);
                resolve(retval);

            }).catch(error => {
                reject(error);
            });
        });
    }

    //Winson Permission Function
    //INPUT:
    //OUTPUT:
    export function permissionAtm(req: any): Promise<FulfillmentResponse> {

        return new Promise<FulfillmentResponse>((resolve, reject) => {

            if (!req.body.result) reject("invalid request");

            // let city = req.body.result.parameters.city;
            const result: FulfillmentResponse = {
                speech: "",
                displayText: "",
                data: {
                    "google": {
                        "expectUserResponse": true,
                        "isSsml": false,
                        "noInputPrompts": [],
                        "systemIntent": {
                            "intent": "actions.intent.PERMISSION",
                            "data": {
                                "@type": "type.googleapis.com/google.actions.v2.PermissionValueSpec",
                                "optContext": "To do this",
                                "permissions": [
                                    "NAME",
                                    "DEVICE_PRECISE_LOCATION"
                                ]
                            }
                        }
                    },
                    "facebook": {
                        "expectUserResponse": true,
                        "isSsml": false,
                        "noInputPrompts": [],
                        "systemIntent": {
                            "intent": "actions.intent.PERMISSION",
                            "data": {
                                "@type": "type.googleapis.com/google.actions.v2.PermissionValueSpec",
                                "optContext": "To do this",
                                "permissions": [
                                    "NAME",
                                    "DEVICE_PRECISE_LOCATION"
                                ]
                            }
                        }
                    }
                },
                contextOut: [],
                source: ""
            };

            resolve(result);


        });

    }

    export function getHelper(apiurl : string) : Promise<any> {
        return new Promise((resp) => {
            https.get(apiurl, res => {
                res.setEncoding("utf8");
                let body = "";
                res.on("data", data => {
                    body += data;
                });
                res.on("end", () => {
                    body = JSON.parse(body);
                    resp(body);
                });
            });
        });
    }
}