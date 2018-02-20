/**
 * Created by josh on 19/10/17.
 */
import {fixedMonthlyPayment, remainingLoanBalance} from '../src/calculator';
import {send} from '../src/emailer';
import * as mocha from  'mocha';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();
chai.use(chaiHttp);

let server = "localhost:8080/v1";


describe('******White Box Script Tests*******', () => {


    describe('(1) White Box Calc Tests', () => {
        it('(1A) PASS: Fixed Monthly Payments', (done) => {
            let res: number = fixedMonthlyPayment(100000, 3, 5);
            res.should.equal(1796.87);
            //console.log("return is : " + res);
            done();

        });

        it('(1B) Pass: remaining balance', (done) => {
            let res: number = remainingLoanBalance(100000, 3, 5, 10);
            res.should.equal(84356.12);
            //console.log("return is : " + res);
            done();

        });
    });

    describe('(2) White Box Mailer Test', () => {

        it("(2A) PASS: Testing Mailer functionality", function () {
            return send(
                "HSBCBot@gmail.com",
                "Testy Tester",
                "(604)123-4567",
                "Booking an appt",
                "i am booking things",
                "Vancouver Branch")
                .then(function (value: any) {
                    //console.log(value);
                    expect(value).to.equal('pass');
                })
                .catch(function (err: any) {
                    //console.log('Error in mailer test');
                    expect.fail();
                });
        });
    });
});


describe( '(3) Black box Script - Calc1', () => {

    describe('(3a) PASS: /GET /calculate/loans', () => {
        it('/GET all calculators', (done) => {
            chai.request(server)
                .get('/calculate/loans')
                .end((err, res) => {
                    //console.log("return is:" + res.body);
                    res.should.have.status(200);
                    res.body['calculators'].should.have.length(2);
                    done();
                });
        });
    });

    describe('(3b) PASS: GET /calculate/loans/0001', () => {
        it('PASS: fixedMonthlyPayment: Valid Get Test ', (done) => {
            chai.request(server)
                .get('/calculate/loans/0001?amount=100000&interestRate=3&years=5')
                .end((err, res) => {
                    //console.log("return is : " + res.body);
                    res.should.have.status(200);
                    res.body.should.have.property('result').eql(1796.87);
                    done();
                });
        });

        it('(3c) FAIL: fixedMonthlyPayment: Missing amount Arg ', (done) => {
            let calc: {} = {
                interestRate: 3, years: 5
            };
            chai.request(server)
                .get('/calculate/loans/0001?interestRate=3&years=5')
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });


    });
});


describe('(4) Black Box Script - remaining Loan Balance', () => {

    describe('GET /calculate/loans/0002', () => {

        it('(4A) PASS:remainingLoanBalance :validtest ', (done) => {
            chai.request(server)
                .get('/calculate/loans/0002?amount=100000&interestRate=3&years=5&monthsRemaining=10')
                .end((err, res) => {
                    //console.log(res.body);
                    res.body.should.have.property('result').eql(84356.12);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });



        it('(4B) remainingLoanBalance : Fail Test: interestRate > 100 ', (done) => {

            chai.request(server)
                .get('/calculate/loans/0002?amount=100000&interestRate=10000&years=5&monthsRemaining=10')
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });

        it('(4C) remainingLoanBalance : Fail Test: Amortized time is not 0<x<30 ', (done) => {
            chai.request(server)
                .get('/calculate/loans/0002?amount=100000&interestRate=10000&years=50&monthsRemaining=10')
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });

        it('(4D) remainingLoanBalance : Fail Test: Negative not allowed ', (done) => {
            chai.request(server)
                .get('/calculate/loans/0002?amount=-100000&interestRate=10000&years=5&monthsRemaining=10')
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });

        it('(4E) remainingLoanBalance : Fail Test: Negative not allowed ', (done) => {
            chai.request(server)
                .get('/calculate/loans/0002?amount=100000&interestRate=-10000&years=5&monthsRemaining=10')
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });

        it('(4F) remainingLoanBalance : Fail Test: Negative not allowed ', (done) => {

            chai.request(server)
                .get('/calculate/loans/0002?amount=100000&interestRate=10000&years=-5&monthsRemaining=10')
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });

        it('(4F) remainingLoanBalance : Fail Test: Negative not allowed ', (done) => {

            chai.request(server)
                .get('/calculate/loans/0002?amount=100000&interestRate=10000&years=5&monthsRemaining=-10')
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });


        it('(4H) remainingLoanBalance : Fail Test: Payments<years*12 ', (done) => {
            chai.request(server)
                .get('/calculate/loans/0002?amount=100000&interestRate=10000&years=5&monthsRemaining=1000000')
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });;
        });

    });

});

describe('(5) Black Box Script - appointments', () => {

    describe('POST /appointments', () => {
        it('(5A) PASS: BOOKING: Valid Post Test ', (done) => {
            let sendval: {} = {
                "contactInfo" : {
                    "firstName": 'bob',
                    "lastName": 'testerson-test',
                    "email": "bob@bobstest.com",
                    "phone" : "604-435-4325"
                },
                "details": "here is some details for the booking"
            };
            chai.request(server)
                .post('/appointments')
                .send(sendval)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('reference');
                    res.body.should.have.property('date');
                    done();
                });
        });

        it('(5B) FAIL: booking: first missing ', (done) => {
            let sendval: {} = {
                "contactInfo" : {
                    "lastName": 'testerson-test',
                    "email": "bob@bobstest.com",
                    "phone" : "604-435-4325"
                },
                "details": "here is some details for the booking"
            };
            chai.request(server)
                .post('/appointments')
                .send(sendval)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });

        it('(5C) FAIL: booking:  phone number missing ', (done) => {
            let sendval: {} = {
                "contactInfo" : {
                    "firstName": 'bob',
                    "lastName": 'testerson-test',
                    "email": "bob@bobstest.com",
                    "phone" : "604-435-4325"
                },
                "details": "here is some details for the booking"
            };
            chai.request(server)
                .post('/appointments')
                .send(sendval)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });

        it('(5d) fail: booking:  phone invalid ', (done) => {
            let sendval: {} = {
                "contactInfo" : {
                    "firstName": 'bob',
                    "lastName": 'testerson-test',
                    "email": "bob@bobstest.com",
                    "phone" : "604-435-4325"
                },
                "details": "here is some details for the booking"
            };
            chai.request(server)
                .post('/appointments')
                .send(sendval)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
    });
});

describe('(6) Black Box Script - xrates', () => {

    describe(' GET /xrates', () => {
        it('(6a) PASS: get USD Rate', (done) => {
            chai.request(server)
                .get('/xrates')
                .end((err, res) => {
                    //console.log(res.body + "\n");
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe(' GET /xrates/{from}', () => {

        it('(6b) PASS: get USD Rate', (done) => {
            chai.request(server)
                .get('/xrates/USD')
                .end((err, res) => {
                    //console.log(res.body);
                    res.should.have.status(200);
                    res.body['from']['code'].should.eql('USD');
                    done();
                });
        });

        it('(6c) FAIL: invalid Rate', (done) => {
            chai.request(server)
                .get('/xrates/JOS')
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
    });

    describe('(6d) GET /xrates/{from}/{to}', () => {

        it('Pass: get EUR->GBP', (done) => {
            chai.request(server)
                .get('/xrates/EUR/GBP')
                .end((err, res) => {
                    //console.log(res.body);
                    res.should.have.status(200);
                    res.body['from']['code'].should.eql('EUR');
                    res.body['to']['code'].should.eql('GBP');
                    res.body.should.have.property('buy');
                    res.body.should.have.property('sell');
                    res.body.should.have.property('timestamp');
                    done();
                });
        });

        it('FAIL: Inval Cur Code', (done) => {
            chai.request(server)
                .get('/fxrates/BOB/GBP')
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        })
    });
});


describe('(7) Black Box Script - convert', () => {

    describe('/xrates/convert', () => {
        it('(7a) PASS: convert USD->JPY', (done) => {
            chai.request(server)
                .get('/xrates/convert?from=USD&to=JPY&amount=1000')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body['from']['code'].should.eql('convert');
                    res.body['rates'][0]['code'].should.eql('USD');
                    res.body['rates'][1]['code'].should.eql('JPY');
                    res.body.should.have.property('rates');
                    res.body.should.have.property('from');
                    done();
                });
        });

        it('(7b) FAIL: negative amount', (done) => {
            chai.request(server)
                .get('/xrates/convert?from=USD&to=JPY&amount=-1000')
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });

        it('(7c) FAIL: invalid from', (done) => {
            chai.request(server)
                .get('/xrates/convert?from=USDDD&to=JPY&amount=1000')
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });

        it('(7d) Fail: invalid to', (done) => {
            chai.request(server)
                .get('/xrates/convert?from=USD&to=FDSJPYYYYYY&amount=1000')
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });

        it('(7e) Fail: Missing args', (done) => {
            chai.request(server)
                .get('/xrates/convert?from=USD&to=JPY')
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
    });
});
    /*
describe('(8) Testing a call to offline server', () => {
        it('(8a) Offline Get Test', (done) => {
            return chai.request('invalidserver')
                .get('/fxrates/EUR/GBP')
                .end((err, res) => {
                    expect(res.status).to.equal(500);
                    //console.log(err);
                    //console.log(res);
                    done();
                }).catch(function (err: any){
                    //console.log("in err : " + err);
                    expect(err.code).to.equal(500);
                    done()
                });
        });
    });
    */


/*
 DEBUG PRINT CODE

 //console.log("\n\n\n\n\n");
 //console.log("=============\n\n");
 //console.log("res.error\n");
 //console.log(res.error);
 //console.log("\n =============\n\n");
 //console.log("res.body");
 //console.log(res.body);
 //console.log("\n\n =============");

 */