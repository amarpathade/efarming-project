const twilio = require('twilio');
const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSMS = async (to, message) => {
    try {
        const response = await client.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to
        });
        console.log('SMS sent successfully:', response.sid);
        return response;
    } catch (error) {
        console.error('Failed to send SMS:', error); // Ye line error console me dikhayegi
        throw error;
    }
};

module.exports = { sendSMS };
