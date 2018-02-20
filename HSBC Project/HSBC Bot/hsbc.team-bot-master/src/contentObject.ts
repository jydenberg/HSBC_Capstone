/**
 * Created by valeriewyns on 2017-11-15.
 */

/*import {DefaultApi, HttpBasicAuth} from './hsbc-api';
const HSBC_SERVICE_HOST = process.env.HSBC_SERVICE_HOST  "/v1";
let client = new DefaultApi(HSBC_SERVICE_HOST);
const HSBC_USER = process.env.HSBC_USER;
const HSBC_PASS = process.env.HSBC_PASS;
let auth = new HttpBasicAuth();
auth.username = HSBC_USER;
auth.password = HSBC_PASS;
client.setDefaultAuthentication(auth);*/
import {ContentObject} from './contracts';


//TODO: this should all be retrieved from the database
//name of function is the same as the key to call
export namespace Content {
//all of these will be populated from api instead
    //MISCELLANEOUS
    export let directApply: ContentObject = {
        simpleResponse : "Directly Apply",
        speech: "Sure, what is it you would like to apply for?   To be a Premier Customer?  For a Brokerage RRSP Account? For the World Selection Fund?  Mortgage PreApproval?",
        text: "Sure, what is it you would like to apply for?   \n To be a Premier Customer?   \n For a Brokerage RRSP Account?   \n For the World Selection Fund?  \n Mortgage PreApproval?",
        title: "Book an Appointment",
        subtitle: "",
        suggestions: [{"title": "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/mortgage_00.png",
        buttonTitle: ["Visit HSBC"],
        buttonURL: ["https://www.hsbc.ca/1/2/applications/book-appointment?WABFormEntryCommand=cmd_prefill&HiddenMandatoryFields.ProductId=@PR&HiddenMandatoryFields.IndividualSolutionId=DC&HiddenMandatoryFields.WebTrendSkuId=HBCA_BR_APPOINTMENT&HiddenMandatoryFields.ProductionPromotionCode=HPG"]
    }
    export let bookAppointment: ContentObject = {
        simpleResponse: "Let an HSBC Agent help you today.",
        speech: "Thanks. An agent will get in touch with you soon.",
        text: "An agent will get in touch with you soon.",
        title: "Thanks.",
        subtitle: "",
        suggestions: [{"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/mumKid.png",
        buttonTitle: ["More"],
        buttonURL: ["http://www.hsbc.ca"]
    }
    export let aboutUs: ContentObject = {
        simpleResponse: "About HSBC",
        speech: "Founded in 1865 to finance trade between Asia and the West, today HSBC is one of the world’s largest banking and financial services organizations serving around 38 million customers worldwide. Our aim is to be acknowledged as the world’s leading and most respected international bank.   Throughout our history we have been where the growth is, connecting customers to opportunities.    We enable businesses to thrive and economies to prosper, helping people fulfil their hopes and dreams and realize their ambitions. This is our role and purpose.",
        text: "Founded in 1865 to finance trade between Asia and the West, today HSBC is one of the world’s largest banking and financial services organizations serving around 38 million customers worldwide. Our aim is to be acknowledged as the world’s leading and most respected international bank.   \n Throughout our history we have been where the growth is, connecting customers to opportunities.    \n We enable businesses to thrive and economies to prosper, helping people fulfil their hopes and dreams and realize their ambitions.   \n This is our role and purpose.",
        title: "The World's Local Branch",
        subtitle: "",
        suggestions: [{"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/building.png",
        buttonTitle: ["More"],
        buttonURL: "http://www.about.hsbc.ca"
    }
    export let welcome: ContentObject = {
        simpleResponse: "Welcome to HSBC",
        speech: "Welcome to HSBC, what shall we talk about today? Mortgages? RRSPs?, Finding an ATM? Exchange Rates? The World Selection Fund?",
        text: "Welcome to HSBC, what shall we talk about today?  \n Mortgages?  \n RRSPs?,  \n Finding an ATM?  \nExchange Rates?  \n The World Selection Fund?  \n Becoming a Premier Customer?",
        title: "How can we help you today?",
        subtitle: "Find out more",
        suggestions: [{"title": "ATM"}, {"title": "Exchange"}, {"title": "Mortgages"}, {"title": "RRSPs"}, {"title" : "WSF"}, {"title" : "Premier"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/welcomeImage.png",
        buttonTitle: ["Visit HSBC"],
        buttonURL: ["http://www.hsbc.ca"]
    }



    //ATM
    export let findATM: ContentObject = {
        simpleResponse: "Find ATMs in your city.",
        speech: "There are many ATMs in the Lower Mainland. Would you like to narrow down your options to just one?  West Van? North Van?  New West? Burnaby?  Coquitlam? Richmond?",
        text: "Here is a map of all ATMs in the Lower Mainland.  \n Would you like to narrow down your options to just ONE city?  \n  West Vancouver?   \n North Vancouver?  \n  New Westminster?   \n Burnaby?   \n  Coquitlam?  \n Richmond?",
        title: "HSBC ATMs",
        subtitle: "Lower Mainland",
        suggestions: [{"title": "Vancouver"}, {"title" : "West Van"}, {"title" : "North Van"}, {"title": "New West"}, {"title": "Burnaby"}, {"title": "Coquitlam"}, {"title" : "Richmond"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/atmMapAll.png",   //this url is completed in the handleFunc
        buttonTitle: ["Map"],
        buttonURL: ["https://www.google.ca/maps/search/hsbc+Vancouver"]
    }
    export let searchATM: ContentObject = {
        simpleResponse : "Find a specific ATM",
        speech: "Here are the ATMs in your city.",
        text: "Here are the ATMs in your city.  \n Click on the link to open map.",
        title: "",          //this title is completed in the handleFunc
        subtitle: "",
        suggestions: [],    //suggestions created in handleFunc
        imageURL: "",       //image handled in handleFunc
        buttonTitle: ["Map"],
        buttonURL: ["https://www.google.ca/maps/search/hsbc+"]    /* add city here in handleFunc*/
    }


    //RRSP
    export let directRRSP: ContentObject = {
        simpleResponse : "Find out more about HSBC's RRSPs",
        speech: "Life is tough, retire instead. Find out about the benefits of an rrsp, or then contact an agent",
        text: "\n  Life is tough.   \n  Retire instead",
        title: "Invest in your future",
        subtitle: "What about RRSPs shall we discuss?",
        suggestions: [{"title" : "Benefits"}, {"title" : "Apply"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/RRSP.png",
        buttonTitle: ["More"],
        buttonURL: ["http://www.hsbc.ca/1/2/personal/investing/products-and-services/registered-products/rrsp"]
    }
    export let applyRRSP: ContentObject = {
        simpleResponse : "Apply for an RRSP",
        speech: "In order to apply you will need a Social Insurance Number,    Two pieces of valid identification,    Bank account information (transit, institution number, account number and bank address), Spouse or common-law partner's employment information",
        text: "Social Insurance Number,   \n Two pieces of valid identification,   \n Bank account information (transit, institution number,   \n account number and bank address), Spouse or common-law partner's employment information",
        title: "What you need before you call: ",
        subtitle: "",
        suggestions: [{"title" : "Contact Agent"},{"title": "Benefits"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/rrspApply.png",
        buttonTitle: ["More"],
        buttonURL: ["http://www.hsbc.ca/1/2/personal/investing/products-and-services/registered-products/rrsp"]
    }
    export let benefitsRRSP: ContentObject = {
        simpleResponse : "The Benefits of a RRSP",
        speech: "1 Pay less income tax.   Your contribution is deducted directly from your current income, giving you immediate tax savings.   2 Build your wealth faster.   When you contribute regularly throughout the year, you take advantage of compound interest   3  Defer your taxes to a lower rate.    When you start to withdraw money from your RRSP investment your income will likely be lower and you’ll pay less tax",
        text: "1 Pay less income tax.  \n Your contribution is deducted directly from your current income, giving you immediate tax savings.  \n 2 Build your wealth faster.  \n When you contribute regularly throughout the year, you take advantage of the power of compound interest. And since income earned within your RRSP is not taxed, your investment grows even more quickly!  \n 3  Defer your taxes to a lower rate.   \n When you start to withdraw money from your RRSP investment your income will likely be lower and you’ll pay tax at a lower rate.",
        title: "Why should you do it?",
        subtitle: "",
        suggestions: [{"title": "Apply"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/rrspBenefits.png",
        buttonTitle: ["More"],
        buttonURL: "http://www.hsbc.ca/1/2/personal/investing/products-and-services/registered-products/rrsp"
    }
    export let rrspBrokerageAccountNo: ContentObject = {
        simpleResponse: "On to the next thing.",
        speech: "What should we talk about next? Mortgages, World Selection Funds, Find an ATM, How to become Premier customer, The benefits of RRSPs?",
        text: "What should we talk about next?   \n Mortgages,  \n World Selection Funds,  \n Find an ATM,   \n How to become Premier customer,  \n  The benefits of RRSPs?",
        title: "What shall we discuss next?",
        subtitle: "",
        suggestions: [{"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/rrspBenefits.png",
        buttonTitle: ["More"],
        buttonURL: "http://www.hsbc.ca/1/2/personal/investing/products-and-services/registered-products/rrsp"
    }





    //WSF
    export let wsfDirect: ContentObject = {
        simpleResponse : "Direct to World Selection Fund",
        speech: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        text: "This premium investment service ensures you have access to a diversified investment portfolio managed by a range of local and global investment managers.",
        title: "Prepare for your financial future",
        subtitle: "",
        suggestions: [{"title" : "Eligibility"}, {"title" : "Advantages"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/worldSelectionFund.png",
        buttonTitle: ["More"],
        buttonURL: ["http://www.hsbc.ca/1/2/world-selection"]
    }
    export let wsfEligibility: ContentObject = {
        simpleResponse : "WSF Eligibility",
        speech: "A Minimum initial investment of $50,000...  A Subsequent lump-sum investments from $500...   To Contribute from $250 in a regular savings plan",
        text: "A Minimum initial investment of $50,000...  \n A Subsequent lump-sum investments from $500...   \n To Contribute from $250 in a regular savings plan",
        title: "In order to be eligible, you will need: ",
        subtitle: "",
        suggestions: [{"title" : "Advantages"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/worldSelectionFund.png",
        buttonTitle: ["More"],
        buttonURL: ["http://www.hsbc.ca/1/2/world-selection"]
    }
    export let wsfMore: ContentObject = {
        simpleResponse : "More about the World Selection Fund",
        speech: "There are many types of customers: Conservative, Moderate, Balanced, Growth, Aggressive Growth. Would you like to contact an agent to find out more?",
        text: "Conservative   \n Moderate Conservative    \n Balanced    \n Growth     \n Aggressive Growth",
        title: "Your goals can influence how you invest",
        subtitle: "Some typical investor types:",
        suggestions: [{"title" : "Eligibility"}, {"title" : "Advantages"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/worldSelectionFund.png",
        buttonTitle: ["More"],
        buttonURL: ["http://www.hsbc.ca/1/2/world-selection"]
    }
    export let wsfAdvantages: ContentObject = {
        simpleResponse : "More about the advantages of the World Selection Fund",
        speech: "1. Global investment opportunities Your portfolio includes investment opportunities identified by professional investment managers who have insight into the regions and markets in which they invest.   \n 2. Broad diversification: Gain exposure to a wide range of geographic regions, asset classes and investment managers to ensure you can benefit from a broadly diversified investment portfolio.",
        text: "1. Global investment opportunities Your portfolio includes investment opportunities identified by professional investment managers who have insight into the regions and markets in which they invest.   \n 2. Broad diversification: Gain exposure to a wide range of geographic regions, asset classes and investment managers to ensure you can benefit from a broadly diversified investment portfolio.",
        title: "Make Bank",
        subtitle: "HSBC World Selection® Portfolio.",
        suggestions: [{"title" : "Eligibility"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/worldSelectionFund.png",
        buttonTitle: ["More"],
        buttonURL: ["http://www.hsbc.ca/1/2/world-selection"]
    }
    export let wsfNo: ContentObject = {
        simpleResponse : "Ok. What would you like to ask about next? Or would you just like to return to the main menu?",
        speech: "Ok. What would you like to ask about next? Or would you just like to return to the main menu?",
        text: "Ok. What would you like to ask about next? Or would you just like to return to the main menu?",
        title: "",
        subtitle: "",
        suggestions: [],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/worldSelectionFund.png",
        buttonTitle: ["More"],
        buttonURL: ["http://www.hsbc.ca/1/2/world-selection"]
    }




    //MORTGAGE STUFF
    export let directMortgages: ContentObject = {
        simpleResponse : "HSBC Mortgages",
        speech: "Would you like to look at mortgage types, apply for mortgage pre-approval, use our mortgage calculator, or talk about special offers?",
        text: "There are many things we could talk about today.   \n We could do some calculations,  \n  Look into various mortgage options,   \n   Apply for pre-approval,  \n or then look at some special offers.",
        title: "",
        subtitle: "",
        suggestions: [{"title": "Calculator"}, {"title": "Types"}, {"title": "Pre-approval"}, {"title" : "Special Offers"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/mortgage_00.png",
        buttonTitle: ["More"],
        buttonURL: ["https://www.hsbc.ca/1/2/personal/borrowing/mortgages/mortgage-offers?WT.ac=HBCA_161204_11GENMORTe05609H&gclid=CjwKCAiAxuTQBRBmEiwAAkFF1l2xiwjYvczvPIl6-FOftoP2lqFsgniJ-8DN1pfxVofrKewlYSf3RRoC81sQAvD_BwE&gclsrc=aw.ds"]
    }
    export let mortgageCatalogue: ContentObject = {
        simpleResponse : "HSBC Mortgage solutions for the world you live in",
        speech: "There are many types of mortgages. Yours should have the right combination of features that give you the greatest financial flexibility. Ask about the Traditional, Power Equity, or Super Saver mortgages.",
        text: "There are many types of mortgages.  \n Yours should have the right combination of features that give you the greatest financial flexibility.",
        title: "",
        subtitle: "",
        suggestions: [{"title": "Traditional"}, {"title": "Power Equity"}, {"title": "Super Saver"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/dad.png",
        buttonTitle: ["More"],
        buttonURL: ["https://www.hsbc.ca/1/2/personal/borrowing/mortgages/mortgage-offers?WT.ac=HBCA_161204_11GENMORTe05609H&gclid=CjwKCAiAxuTQBRBmEiwAAkFF1l2xiwjYvczvPIl6-FOftoP2lqFsgniJ-8DN1pfxVofrKewlYSf3RRoC81sQAvD_BwE&gclsrc=aw.ds"]
    }

    //PRE-APPROVAL
    export let mortgagePreApproval: ContentObject = {
        simpleResponse: "What you need to know before applying",
        speech: "You are at least the age of majority, 18 or 19 years of age depending on your province of residence, and You are a Canadian resident. You will be asked to provide personal details and gross annual income (pre-tax). You will be asked to consent to us obtaining your credit report. If you are applying for a joint loan, the co-applicant must complete the application. Would you like to contact an agent to apply?",
        text: "You are at least the age of majority, 18 or 19 years of age depending on your province of residence, and You are a Canadian resident.  \n You will be asked to provide personal details and gross annual income (pre-tax).  \n You will be asked to consent to us obtaining your credit report. If you are applying for a joint loan, the co-applicant must complete the application.  \n Would you like to contact an agent to apply?",
        title: "Pre-approval",
        subtitle: "",
        suggestions: [{"title" : "Yes"}, {"title" : "Types"}, {"title" : "Calculator"}, {"title" : "Special Offers"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/friends.png",
        buttonTitle: ["More"],
        buttonURL: ["https://www.hsbc.ca/1/2/personal/borrowing/mortgages/type-of-mortgages"]
    }
    export let mortgagePreApprovalApplied: ContentObject = {
        simpleResponse: "Thanks for contacting us. An agent will get back to you soon.",
        speech: "Thanks for contacting us. An agent will get back to you soon.",
        text: "Thanks for contacting us. An agent will get back to you soon.",
        title: "Message Received",
        subtitle: "",
        suggestions: [{"title" : "Types"}, {"title" : "Calculator"}, {"title" : "Special Offers"}, {"title" : "Mortgages"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/canoes.jpg",
        buttonTitle: ["More"],
        buttonURL: ["https://www.hsbc.ca/1/2/personal/borrowing/mortgages/type-of-mortgages"]
    }
    export let mortgagePreApprovalNotApplied: ContentObject = {
        simpleResponse: "All right. What shall we do instead?",
        speech: "All right. What shall we do instead?",
        text: "All right. What shall we do instead?",
        title: "Re-direct",
        subtitle: "",
        suggestions: [{"title" : "Main Menu"}, {"title" : "Mortgages"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/canoes.jpg",
        buttonTitle: ["More"],
        buttonURL: ["https://www.hsbc.ca/1/2/personal/borrowing/mortgages/type-of-mortgages"]
    }
    //CALCULATOR
    export let calculateMortgage0: ContentObject = {
        simpleResponse: "Mortgage Calculator",
        speech: "What would you like to calculate today? Your remaining balance or your monthly payments?",
        text: "What would you like to calculate today?   \n  Your remaining balance or   \n  Your monthly payments?",
        title: "Let us Calculate",
        subtitle: "",
        suggestions: [{"title" : "Remaining"}, {"title" : "Monthly"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/couple.png",
        buttonTitle: [""],
        buttonURL: [""]
    }
    export let calculateMortgageRemaining: ContentObject ={
        simpleResponse: "Your remaining mortgage balance is: ",
        speech: "Your remaining mortgage balance is: ",
        text: "Your remaining mortgage balance is: ",
        title: "",
        subtitle: "",
        suggestions: [{"title" : "Mortgages"}, {"title" : "Monthly"}, {"title" : "Main Menu"}],
        imageURL: "",
        buttonTitle: [""],
        buttonURL: [""]
    }
    export let calculateMortgageMonthly: ContentObject ={
        simpleResponse: "Calculate Monthly",
        speech: "Your monthly payment would be: ",
        text: "Your monthly payment would be: ",
        title: "",
        subtitle: "",
        suggestions: [{"title" : "Mortgages"}, {"title" : "Remaining"}, {"title" : "Main Menu"}],
        imageURL: "",
        buttonTitle: [""],
        buttonURL: [""]
    }




    export let specialOfferDirect: ContentObject = {
        simpleResponse: "HSBC Special Offers on Mortgage Rates",
        speech: "Which Special Offer would you like to talk about? Premier, Advance, Smart Saver, or Personal Rates",
        text: "",
        title: "Specials",
        subtitle: "",
        suggestions: [{"title" : "Advance"}, {"title" : "Premier"}, {"title" : "Personal Rates"}, {"title" : "Smart Saver"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/mortgage_02.png",
        buttonTitle: ["More"],
        buttonURL: ["https://www.hsbc.ca/1/2/personal/borrowing/rates/mortgage-and-loan-rates"]
    }
    export let specialOfferAdvance: ContentObject = {
        simpleResponse: "Advance Mortgage Special Offer",
        speech: "Our Fixed Rates for a 2 year Closed mortgage are 2.89%...  for a 5 year Fixed Closed it's 2.99%  and for our Variable Rates the rate is 2.34%",
        text: "Our Fixed Rates are:    \n  2 year Fixed Closed: 2.89%   \n   5 year Fixed Closed: 2.99%  \n    Our Variable Rates are:   \n   5 year Variable Closed: 2.34%",
        title: "Advance",
        subtitle: "",
        suggestions: [{"title" : "Premier"}, {"title" : "Personal Rates"}, {"title" : "Smart Saver"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/coupleEating.png",
        buttonTitle: ["More"],
        buttonURL: ["https://www.hsbc.ca/1/2/personal/borrowing/rates/mortgage-and-loan-rates"]
    }
    export let specialOfferPremier: ContentObject = {
        simpleResponse: "Premier Mortgage Special Offer",
        speech: "Our Fixed Rates for a 2 year Closed mortgage are 2.89%...  for a 5 year Fixed Closed it's 2.99%  and for our Variable Rates the rate is 2.34%",
        text: "Our Fixed Rates are:    \n  2 year Fixed Closed: 2.89%   \n   5 year Fixed Closed: 2.99%  \n    Our Variable Rates are:   \n   5 year Variable Closed: 2.34%",
        title: "Premier",
        subtitle: "",
        suggestions: [{"title" : "Advance"}, {"title" : "Personal Rates"}, {"title" : "Smart Saver"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/umbrellas.png",
        buttonTitle: ["More"],
        buttonURL: ["https://www.hsbc.ca/1/2/personal/borrowing/rates/mortgage-and-loan-rates"]
    }
    export let specialOfferPersonalRates: ContentObject = {
        simpleResponse: "Personal Rates Mortgage Special Offer",
        speech: "Our Fixed Rates for a 2 year Closed mortgage are 2.89%...  for a 5 year Fixed Closed it's 2.99%  and for our Variable Rates the rate is 2.34%",
        text: "Our Fixed Rates are:    \n  2 year Fixed Closed: 2.89%   \n   5 year Fixed Closed: 2.99%  \n    Our Variable Rates are:   \n   5 year Variable Closed: 2.34%",
        title: "Personal",
        subtitle: "",
        suggestions: [{"title" : "Advance"}, {"title" : "Premier"}, {"title" : "Smart Saver"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/wedding.png",
        buttonTitle: ["More"],
        buttonURL: ["https://www.hsbc.ca/1/2/personal/borrowing/rates/mortgage-and-loan-rates"]
    }
    export let specialOfferSmartSaver: ContentObject = {
        simpleResponse: "Smart Saver Special Offer",
        speech: "Our Fixed Rates for a 2 year Closed mortgage are 2.89%...  for a 5 year Fixed Closed it's 2.99%  and for our Variable Rates the rate is 2.34%",
        text: "Our Fixed Rates are:    \n  2 year Fixed Closed: 2.89%   \n   5 year Fixed Closed: 2.99%  \n    Our Variable Rates are:   \n   5 year Variable Closed: 2.34%",
        title: "Smart Saver",
        subtitle: "",
        suggestions: [{"title" : "Advance"}, {"title" : "Premier"}, {"title" : "Personal Rates"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/friends.png",
        buttonTitle: ["More"],
        buttonURL: ["https://www.hsbc.ca/1/2/personal/borrowing/rates/mortgage-and-loan-rates"]
    }
    export let traditionalMortgage: ContentObject = {
        simpleResponse: "HSBC Traditional Mortgage, ideal if you are a first-time homebuyer",
        speech: "Pay down your mortgage faster with flexible early payment options allowing you to prepay up to 20% of the original mortgage amount or by increasing the payment amount up to a total of 20% each year.   \n You can also make a match a payment and miss one later.   \n Already enrolled in the Rewards Program with your HSBC MasterCard? Redeem Reward Points to reduce your mortgage amount.   \n Enjoy preferential interest rates as a HSBC Premier or HSBC Advance Client.",
        text: "Pay down your mortgage faster with flexible early payment options allowing you to prepay up to 20% of the original mortgage amount or by increasing the payment amount up to a total of 20% each year.   \n You can also make a match a payment and miss one later.   \n Already enrolled in the Rewards Program with your HSBC MasterCard? Redeem Reward Points to reduce your mortgage amount.   \n Enjoy preferential interest rates as a HSBC Premier or HSBC Advance Client.",
        title: "Become a homeowner sooner than you think",
        subtitle: "The HSBC Traditional Mortgage is an ideal choice if you are a first-time homebuyer, have limited down payment options and want to build equity in your home.",
        suggestions: [{"title" : "Equity Power"}, {"title": "Super Saver"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/couple.png",
        buttonTitle: ["More"],
        buttonURL: ["https://www.hsbc.ca/1/2/personal/borrowing/mortgages/type-of-mortgages/traditional-mortgage/right-for-you"]
    }
    export let equityPowerMortgage: ContentObject = {
        simpleResponse: "HSBC Equity Power Mortgage, ideal if you want to use your equity",
        speech: "Renovate, travel or make a major purchase: Access up to 80% of the value of your home.    Flexible rate options: Benefit from a combination of fixed and variable terms.   Save money: Consolidate high-interest debt and reduce the amount of interest you pay.  Exclusive savings: Reduced interest rates for HSBC Premier and HSBC Advance clients.",
        text: "Renovate, travel or make a major purchase: Access up to 80% of the value of your home.   \n Flexible rate options: Benefit from a combination of fixed and variable terms.   \n Save money: Consolidate high-interest debt and reduce the amount of interest you pay.   \n Exclusive savings: Reduced interest rates for HSBC Premier and HSBC Advance clients.",
        title: "Make the equity in your home work for you",
        subtitle: "The HSBC Equity Power Mortgage is an ideal choice if you want to use the equity you’ve built up in your home for important goals or want to consolidate high-interest loans to reduce the impact of interest rate fluctuations.",
        suggestions: [{"title" : "Traditional"}, {"title": "Super Saver"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/equity.png",
        buttonTitle: ["More"],
        buttonURL: ["https://www.hsbc.ca/1/2/personal/borrowing/mortgages/type-of-mortgages/equity-power-mortgage/right-for-you"]
    }
    export let smartSaversMortgage: ContentObject = {
        simpleResponse: "HSBC Smart Savers Mortgage, if you want to keep your savings accessible",
        speech: "Pay a lower interest rate on your mortgage based on the amount in your eligible linked HSBC account Continue to earn interest on that linked account.   \n Access the money from your linked account when you need it.   \n Pay down your mortgage faster with flexible early payment options allowing you to prepay up to 20% of the original mortgage amount or increasing the payment amount up to a total of 20% each year.    \n You can also make a match a payment and miss one later.",
        text: "Pay a lower interest rate on your mortgage based on the amount in your eligible linked HSBC account Continue to earn interest on that linked account.   \n Access the money from your linked account when you need it.   \n Pay down your mortgage faster with flexible early payment options allowing you to prepay up to 20% of the original mortgage amount or increasing the payment amount up to a total of 20% each year.    \n You can also make a match a payment and miss one later.",
        title: "Pay off your mortgage faster",
        subtitle: "The HSBC Smart Savers Mortgage is an ideal choice if you want to keep your savings accessible.",
        suggestions: [{"title" : "Traditional"}, {"title": "Power Equity"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/sisters.png",
        buttonTitle: ["More"],
        buttonURL: ["https://www.hsbc.ca/1/2/personal/borrowing/mortgages/type-of-mortgages/smart-savers-mortgage/right-for-you"]
    }



    //CUSTOMER STUFF
   export let directPremier: ContentObject = {
        simpleResponse: "Become a Premier Customer.",
        speech: "HSBC Premier offers comprehensive banking and investment services tailored to your financial needs. Would you like to find out more about: The benefits of being a Premier Customer? Of How to apply? Of eligibility requirements? About Premier customer mortgage rates?",
        text: "HSBC Premier offers comprehensive banking and investment services tailored to your financial needs.   \n  Would you like to find out more about:   \n   The benefits of being a Premier Customer?    \n Of How to apply?   \n  Of eligibility requirements?   \n  About Premier customer mortgage rates?",
        title: "Premier",
        subtitle: "",
        suggestions: [{"title" : "Eligibility"}, {"title" : "Benefits"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/premier_needs.png",
        buttonTitle: ["More"],
        buttonURL: ["http://www.hsbc.ca/1/2/personal/banking/hsbc-premier/contact"]
    }
    export let premierCustomerBenefits: ContentObject = {
        simpleResponse: "Premier Customer Benefits",
        speech: "Your Relationship Manager: A dedicated Premier Relationship Manager identifies a wealth strategy designed just for you.     Meeting your needs: Our Relationship Managers are recognized based on how well they provide their service and how well they meet your needs.      Anytime, anywhere: Your personal economy is always with you. So are we, providing support and services whenever and wherever you need us.        Preferential Access: Access some of the most prestigious banking products, services and rewards that we have to offer.",
        text: "Your Relationship Manager: A dedicated Premier Relationship Manager identifies a wealth strategy designed just for you.   \n Meeting your needs: Our Relationship Managers are recognized based on how well they provide their service and how well they meet your needs.   \n Anytime, anywhere: Your personal economy is always with you. So are we, providing support and services whenever and wherever you need us.     \n Preferential Access: Access some of the most prestigious banking products, services and rewards that we have to offer.",
        title: "HSBC Premier focuses on the most important economy in the world. Yours.",
        subtitle: "",
        suggestions: [{"title" : "Eligibility"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/premier_benefits.png",
        buttonTitle: ["More"],
        buttonURL: ["https://www.hsbc.ca/1/2/personal/banking/hsbc-premier/benefits"]
    }
    export let premierCustomerApplication = {
        simpleResponse: "Thanks for contacting us!",
        speech: "Thanks for contacting us! We will get an agent to contact you soon.",
        text: "We will get an agent to contact you soon.",
        title: "",
        subtitle: "",
        suggestions: [{"title" : "Benefits"}, {"title" : "Main Menu"}],
        imageURL: "",
        buttonTitle: [""],
        buttonURL: [""]
    }
    export let premierCustomerEligibility: ContentObject = {

        simpleResponse: "Premier Eligibility",
        speech: "You will need a minimum of $100,000 to fund your HSBC Total Relationship Balance.   You will need to open a mortgage with a minimum amount of $500,000 at HSBC.   Or you have Qualified for HSBC Premier in another country",
        text: "You will need a minimum of $100,000 to fund your HSBC Total Relationship Balance  \n You will need to open a mortgage with a minimum amount of $500,000 at HSBC  \n Or you have Qualified for HSBC Premier in another country",
        title: "HSBC",
        subtitle: "Welcome to a whole new way of banking with HSBC Advance",
        suggestions: [ {"title" : "Benefits"}, {"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/dad.png",
        buttonTitle: ["More"],
        buttonURL: ["https://www.us.hsbc.com/1/2/home/advance"]
    }

    export let directAdvance: ContentObject = {
        simpleResponse: "Become an Advance Customer",
        speech: "HSBC Advance offers comprehensive banking and investment services tailored to your financial needs. Would you like to find out more about: The benefits of being an Advance Customer? Of How to apply? Of eligibility requirements? About Advance customer mortgage rates?",
        text: "HSBC Advance offers comprehensive banking and investment services tailored to your financial needs.   \n  Would you like to find out more about:   \n   The benefits of being an Advance Customer?    \n Of How to apply?   \n  Of eligibility requirements?   \n  About Advance customer mortgage rates?",
        title: "",
        subtitle: "",
        suggestions: [],
        imageURL: "",
        buttonTitle: [""],
        buttonURL: [""]
    }
    export let advanceCustomerBenefits: ContentObject = {
        simpleResponse: "Advance Benefits",
        speech: "Everyone is different, which is why we make the effort to understand your needs and how you like to bank.    We offer you preferential rates with unique rewards and benefits to help you with your everyday banking, borrowing and investment needs - because we want to help you reach your individual goals.     Speak to a mortgage specialist at 1-866-609-4722. ",
        text: "Everyone is different, which is why we make the effort to understand your needs and how you like to bank.   \n We offer you preferential rates with unique rewards and benefits to help you with your everyday banking, borrowing and investment needs - because we want to help you reach your individual goals.   \n Speak to a mortgage specialist at 1-866-609-4722. ",
        title: "HSBC",
        subtitle: "Welcome to a whole new way of banking with HSBC Advance",
        suggestions: [{"title" : "Main Menu"}],
        imageURL: "https://storage.googleapis.com/hello_init/chat_trial_images/dad.png",
        buttonTitle: ["More"],
        buttonURL: ["https://www.us.hsbc.com/1/2/home/advance"]
    }

    //FX RATES
    export let findFxRates: ContentObject = {
        simpleResponse: "HSBC Exchange Rates",
        speech: "",
        text: "",
        title: "",
        subtitle: "",
        suggestions: [],
        imageURL: "",
        buttonTitle: ["More"],
        buttonURL: ["https://www.personal.hsbc.com.hk/1/2/hk/investments/mkt-info/fcy"]
    }
    export let searchFxRates: ContentObject = {
        simpleResponse: "HSBC Exchange Rates",
        speech: "",
        text: "",
        title: "",
        subtitle: "",
        suggestions: [],
        imageURL: "",
        buttonTitle: ["More"],
        buttonURL: ["https://www.personal.hsbc.com.hk/1/2/hk/investments/mkt-info/fcy"]
    }
}
/*
 export let calculateMortgage0: ContentObject = {
 simpleResponse: "",
 speech: "",
 text: "",
 title: "",
 subtitle: "",
 suggestions: [],
 imageURL: "",
 buttonTitle: [""],
 buttonURL: [""]
 }
 */