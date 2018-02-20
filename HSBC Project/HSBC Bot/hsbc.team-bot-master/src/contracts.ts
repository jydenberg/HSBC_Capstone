/**
 * A fulfillment webhook request from API.AI
 */
export interface FulfillmentRequest {
    id: string,
    body: {
        result: Object,
        parameters: Object,
        source: string,
        action: string
    }
}

/**
 * A fulfillment webhook response to send to API.AI
 */
export interface FulfillmentResponse {
    speech: string,
    displayText: string,
    data: Object,
    contextOut: Object[],
    source: string,
    followupEvent?: Object
}




/**
 * Content Object for Complex component input
 */
export interface ContentObject{
    simpleResponse : string,
    speech : string,
    text : string,
    title : string,
    subtitle : string,
    imageURL : string,
    suggestions : any,
    buttonTitle : any,
    buttonURL : any
}

