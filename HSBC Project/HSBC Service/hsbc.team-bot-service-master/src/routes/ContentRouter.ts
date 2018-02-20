import {NextFunction, Request, Response, Router} from "express";
var ContentDao = require('../dao/Content');
var XRatesDao = require('../dao/XRates');

export class ContentRouter {

    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public getContent(req: Request, res: Response, next: NextFunction) {

        let subject : string = req.params.subject;
        ContentDao.findContent(subject).then(function(content){
            console.log(content);
            if(content != null){
                res.send(content);
            } else {
                res.status(500);
                res.send("Requested content not found.");
            }
        })
    }

    private init() {
        this.router.get("/:subject", this.getContent);
    }

}

const ContentRoutes = new ContentRouter();
export default ContentRoutes.router;