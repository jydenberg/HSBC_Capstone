/**
 * Created by bulat on 31/10/17.
 */
import {NextFunction, Request, Response, Router} from "express";
var AtmDao = require('../dao/ATMs')

export class ATMRouter {

    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public get(req: Request, res: Response, next: NextFunction) {

        AtmDao.findAllAtms().then(function(result){
            console.log(result);
            res.send(result);
        })

    }

    private init() {
        this.router.get("/", this.get);
    }

}

const ATMRoutes = new ATMRouter();
export default ATMRoutes.router;