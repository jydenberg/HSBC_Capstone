import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import mongoose = require('mongoose');
import * as basicAuth from 'express-basic-auth';

import AppointmentRouter from './routes/AppointmentsRouter';
import XRatesRouter from './routes/XRatesRouter';
import CalculatorRouter from './routes/CalculatorRouter';
import ATMRouter from "./routes/ATMRoutes";
import ContentRouter from "./routes/ContentRouter";

'use strict';

const HSBC_USER : string = process.env.HSBC_USER;
const HSBC_PASS : string = process.env.HSBC_PASS;

class App {

    public express: express.Application;

    constructor() {

        this.express = express();
        this.middleware();
        this.database();
        this.routes();
        
    }

    /**
     *  If using Basic Authentication, this function would be
     *  responsible for accessing the authentication service or
     *  database. NOTE: This is a development solution, use JWT
     *  in production instead
     */
    private basicAuthorizer(username: string, password: string) {

    	return username == HSBC_USER && password == HSBC_PASS;

    }

    /**
     * Configures the middleware used by the express application
     */
    private middleware() : void {
        
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));

        // NOTE: basic auth is a temporary solution for development!
        // Only use for local testing or over HTTPS in staging.
        // todo: use JWT for production authentication and authorization

		if (process.env.DEBUG!='1'){
            this.express.use(basicAuth({authorizer: this.basicAuthorizer}));
		}

    }

    /**
     * Configures URL routes
     */
    private routes(): void {

        let router = express.Router();

        router.use('/appointments', AppointmentRouter);
        router.use('/xrates', XRatesRouter);
        router.use('/calculate', CalculatorRouter);
        router.use('/atm', ATMRouter);
		router.use('/content', ContentRouter);

        this.express.use('/v1', router);

        // Readiness checkpoint. Healthz was chosen since it's
        // the default readiness endpoint used by Kubernetes
        // must be consistent with the readiness check defined in app.yaml
        // if deploying via AppEngine
		this.express.use('/healthz', (req, res) => {
			// todo: ensure connection to database before okaying check
			res.sendStatus(200);
		});

    }

	/**
	 * Attempts to establish a connection with the database
	 * Failure to connect will 
	**/
    public database() {
        
        // Get credentials from environment
		let host = process.env.MONGO_DB_HOST;
		let name = process.env.MONGO_DB_NAME;
		let user = process.env.MONGO_DB_USER;
		let pass = process.env.MONGO_DB_PASS;
		const uri = `mongodb://${host}/${name}`;

		mongoose.connect(uri,
			{
				useMongoClient: true,
				user: user,
				pass: pass
			}
		);

		mongoose.connection.on('connected', () => {
			console.log("Successfully connected to DB");
		});

		mongoose.connection.on('error', error => {
			console.error("Error connecting to DB: " + error);
		});

		mongoose.connection.on('disconnected', () => {
			console.log("Disconnected from DB");
		});

		process.on('SIGINT', () => {
			mongoose.connection.close(() => {
				console.log("SIGINT: Closed MONGODB connection");
				process.exit(0);
			});
		});

    }

}

export default new App().express;
