import * as mocha from  'mocha';
import {Images} from "../../src/imageLibrary";



var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = chai.request;
var should = chai.should();

chai.use(chaiHttp);

// WHITE BOX TESTING OF WHAT THE FUNCTION RETURNS FOR SOME INPUT

describe('Image Library Test Script', () => {

    describe('getCityImage', () => {

        it("return Vancouver url with Vancouver as city", function () {

            let url = Images.getCityImage("Vancouver");
            expect(url).equals("https://storage.googleapis.com/hello_init/chat_trial_images/atmMapVancouver.png");
        });

        it("return Burnaby url with Burnaby as city", function () {

            let url = Images.getCityImage("Burnaby");
            //console.log(url);
            expect(url).equals("https://storage.googleapis.com/hello_init/chat_trial_images/atmMapBurnaby.png");
        });

        it("return Richmond url with Richmond as city", function () {
            let url = Images.getCityImage("Richmond");
            //console.log(url);
            expect(url).equals("https://storage.googleapis.com/hello_init/chat_trial_images/atmMapRichmond.png");
        });

        it("return undefined url with non-existent city endpoint", function () {
            let url = Images.getCityImage("Washington");
            //console.log(url);
            expect(typeof url).equals("undefined");
        });
    });
});