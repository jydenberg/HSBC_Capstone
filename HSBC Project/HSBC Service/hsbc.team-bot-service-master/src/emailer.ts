import {createTransport, SendMailOptions, Transporter} from 'nodemailer';

const HSBCEMAIL : string = process.env.HSBC_EMAIL_ACCOUNT;
const HSBCPASS : string = process.env.HSBC_EMAIL_PASS;

// todo: configure tokens
let transporter : Transporter= createTransport({
    service: 'gmail',
    auth: {
        user: HSBCEMAIL,
        pass: HSBCPASS
    }
});

/**
 * todo: include contact and context info (e.g. name, phone number, reason for booking)
 * @param email: customer e-mail
 * @param name: customer name
 * @param pnum: customer phone number
 * @param reason : reason for booking (ie mortgage advice, financing , etc)
 * @param booking : booking reference (should be returned by emailer service in production)
 * @returns resolved promise is successful, rejects with error otherwise
 */
export function send(email:string, name:string, pnum:string,reason:string, booking:string) :  Promise<any> {

    let email_body : string =
        "Name : " + name + "<br>" +
        "Email : " + email + "<br>" +
        "Phone Number : " + pnum + "<br>" +
        "Reference Number is : " + booking + "<br>" +
        "Requested Time and Details for booking are: " + reason; // might have to deal with long messages not wrapping properly

    let format_body = "<p>" + email_body + "</p>";

    return new Promise<any>((resolve, reject) =>{

        // todo: use templating for e-mail body
        const mailOptions : SendMailOptions = {
            from: 'HSBCBOT',
            to: 'hsbcbot@gmail.com',
            subject: 'HSBC bot has received a booking',
            html: format_body
        };

        transporter.sendMail(mailOptions, function (err : any) {
            if (err) {
                console.error(`Error sending mail: ${err}`);
                reject(err);
            } else {
                resolve('pass');
            }
        });

    });

}