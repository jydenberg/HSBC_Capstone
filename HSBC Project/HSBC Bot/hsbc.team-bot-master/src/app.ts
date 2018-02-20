import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as basicAuth from 'express-basic-auth';

import {Actions} from './actions';
'use strict';

const app: express.Express = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Basic-auth function only takes one valid username-password pair
// Not intended for production: replace with integration with an auth server
let DF_USER = process.env.DIALOGFLOW_USER;
let DF_PASS = process.env.DIALOGFLOW_PASS;
function basicAuthorizer(username: string, password: string) {
    return username == DF_USER && password == DF_PASS;
}

// Check the process environment for debug flag
// If set, do not require authentication
if(process.env.DEBUG!='1') {
    app.use(basicAuth({authorizer: basicAuthorizer}));
}

app.route('/dialogflow').post(function (req: any, res: any) {
    Actions.handleRequest(req).then(response => {
        res.json(response);
    }).catch(err => {
        console.error(err);
        res.sendStatus(400);
    });
});

export default app;
