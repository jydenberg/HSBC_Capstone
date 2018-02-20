/**
 * Created by josh on 17/10/17.
 */

/**
 * Based off Website function found at https://www.mtgprofessor.com/formulas.htm
 * Calculates monthly payment
 * todo: rewrite function with parameter names
 * P = L[c(1 + c)n]/[(1 + c)n - 1]
 *
 * @param loanAmount
 * @param interestRate
 * @param years
 * @returns {number}
 */
export function fixedMonthlyPayment(loanAmount: number, interestRate: number, years: number  ) : number {
    let monthlyRate : number = (interestRate * .01) / 12;
    let months : number = years * 12;

    //   let ret : number =  (loanAmount * (monthlyRate * ((1 + monthlyRate) ** months))) / (((1 + monthlyRate) ** months) - 1);
    // console.log('ret is: ' + ret + '\ntype of ret is :' + typeof(ret));

    let ret : number =  loanAmount*(monthlyRate * Math.pow((1 + monthlyRate), months))/(Math.pow((1 + monthlyRate), months) - 1);
    let retval : string = ret.toFixed(2);
    ret = parseFloat(retval);
    return ret;
}

/*
 * Based off Website function found at https://www.mtgprofessor.com/formulas.htm
 * Calculates remaining loan balance
 * todo: rewrite function with parameter names
 * B = L[(1 + c)n - (1 + c)p]/[(1 + c)n - 1]
 *
 * @param loanAmount
 * @param interestRate
 * @param years
 * @param monthsRemaining
 * @returns {number}
 */
export function remainingLoanBalance (loanAmount: number, interestRate: number, years: number , paymentsMadeinMonths : number): number{
    let monthly_rate : number = (interestRate * .01) / 12;
    let months : number  = years * 12;
    let ret :number = (loanAmount * (((1 + monthly_rate) ** months) - ((1 + monthly_rate) ** paymentsMadeinMonths))) /
        (((1 + monthly_rate) ** months) - 1);
    let retval : string = ret.toFixed(2);
    ret = parseFloat(retval);
    return ret;
}
