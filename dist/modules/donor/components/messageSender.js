"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const messageSender = () => {
    console.log("hello");
    client.messages.create({
        body: "poda sotta sunni",
        from: process.env.TWILIO_PHONE_NO,
        to: "+917358351795"
    }).then(res => {
        console.log(res);
        return res;
    }).catch(e => {
        console.log(e);
        throw e;
    });
};
exports.default = messageSender;
//# sourceMappingURL=messageSender.js.map