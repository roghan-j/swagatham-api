import { DonorEntity } from "../donor.entity";

require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const messageSender = (donors: DonorEntity[]) => {
  donors.map(donor => {
    client.messages.create({
      body: `${donor.name}`,
      from: process.env.TWILIO_PHONE_NO,
      to: "+917358351795"
    }).then(res => {
      // console.log(res)
      return res
    }).catch(e => {
      console.log(e)
      throw e
    })
  })
}

export default messageSender