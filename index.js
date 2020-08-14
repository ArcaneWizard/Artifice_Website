require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const host = '0.0.0.0';
const mongoURI = `localhost/database`

let db = require('monk')(process.env.MONGODB_URI || mongoURI);
console.log("Connected to " + db._connectionURI);
var mailingList = db.get('mailList');

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.get('/mailingList', (req, res) => {
    mailingList.find()
        .then(email => {
            res.json(email);
        })
});

app.post('/test', (req, res) => {
    sendConfirmationEmail(req.body.email);
    res.json("this is a test msg sent from the server while debugging");
})

app.post('/email', (req, res) => {
    try {
        mailingList.find({ mail: req.body.email }, { multi: false }, (err, obj) => {

            //if an array with that mail object is returned, it already exists
            if (obj.length >= 1) {
                res.json("This email has already been added");
            }
            else {

                //if the email is a valid email, add them with confirmation
                if (validateEmail(req.body.email)) {
                    mailingList
                        .insert({ mail: req.body.email })
                        .then(() => {
                            sendConfirmationEmail(req.body.email);
                            res.json("You've been successfully added to the mailing list.")
                        });
                }

                //otherwise, let them know there email entered isn't valid
                else {
                    res.json("Please enter a valid email address.");
                }
            }
        });
    }
    catch {
        res.json("Mailing list database not accessible. Try again later.")
    }
});

function sendConfirmationEmail(userEmail) {
    let transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    }));

    let mailOptions = {
        from: 'ballisticwalrus42@gmail.com',
        to: userEmail,
        subject: 'Dusk Knight Mailing List',
        text: 'You have successfuly wishlisted the game and will be notified when the mobile game Dusk Knight comes out!.'
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if (err)
            console.log("An error occured", err);
        else
            console.log("Email sent");
    })
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

app.listen(port, host, () => console.log(`Server listening on port ${port}`));

if (process.env.NODE_ENV === "production"){    
   app.use(express.static(path.join(__dirname, "build")));
}

