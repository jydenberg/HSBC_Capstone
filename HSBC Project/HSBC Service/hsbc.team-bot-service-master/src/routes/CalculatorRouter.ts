import {NextFunction, Request, Response, Router} from "express";
import * as calculator from '../calculator';

interface CalculationResult {
    result: number,
    details: string
}

interface CalculatorList {
    product: string,
    calculators: Calculator[]
}

interface Calculator {
    id: string,
    name: string,
    parameters: string[]
}

export class CalculatorRouter {

    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    // This is NOT how calculators are meant to be stored in production!!!
    // todo: find a way to store and lookup calculator definitions
    private static FMP_ID = "0001";
    private static RLB_ID = "0002";
    private static CALCULATOR_IDS = [CalculatorRouter.FMP_ID, CalculatorRouter.RLB_ID];
    private static LOAN_CALCULATORS : Calculator[] = [
        {
            id: CalculatorRouter.CALCULATOR_IDS[0],
            name: "Fixed Monthly Payments",
            parameters: ["amount", "interestRate", "years"]
        },
        {
            id: CalculatorRouter.CALCULATOR_IDS[1],
            name: "Remaining Loan Balance",
            parameters: ["amount", "interestRate", "years", "monthsRemaining"]
        }
    ];

    public getCalculators(req: Request, res: Response, next: NextFunction) {

        // get parameters from URL
        let product : string = req.params.product;

        // this code emulates checking for calculators for the product
        // currently we have calculator functions only pertaining to loans
        // so all other request will be rejected until others are implemented

        if (product != "loans") {

            res.status(400);
            res.json({error: "No calculators found for " + product});
            res.send();

        } else {

            // this is NOT how calculators will be looked up for production!!!
            let payload : CalculatorList = {
                product: "Personal Loans",
                calculators: CalculatorRouter.LOAN_CALCULATORS
            };

            res.send(payload);

        }

    }

    public calculate(req: Request, res: Response, next: NextFunction) {

        // get parameters from URL
        let product : string = req.params.product;
        let id : string = req.params.id;

        // as with getCalculators(), the validation and lookup code below is NOT for production!!!
        if (product != "loans" || CalculatorRouter.CALCULATOR_IDS.indexOf(id) < 0) {

            res.status(400);
            res.json({error: "No calculators found for " + product});
            res.send();

        } else {

            let result = 0;
            let details = "Unknown calculation";

            switch (id) {

                case CalculatorRouter.FMP_ID:

                    // todo: encapsulate
                    details = "Fixed Monthly Payments";
                    result = calculator.fixedMonthlyPayment(
                        req.query.amount, req.query.interestRate, req.query.years);
                    break;

                case CalculatorRouter.RLB_ID:

                    // todo: encapsulate
                    details = "Remaining Loan Balance";
                    result = calculator.remainingLoanBalance(
                        req.query.amount, req.query.interestRate, req.query.years, req.query.monthsRemaining);
                    break;

            }

            let payload : CalculationResult = {
                result : result,
                details: details
            };

            res.send(payload);

        }

    }

    private init() {
        this.router.get('/:product', this.getCalculators);
        this.router.get('/:product/:id', this.calculate);
    }

}

const calculatorRoutes = new CalculatorRouter();
export default calculatorRoutes.router;