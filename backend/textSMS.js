require('dotenv').config();
const twilio = require('twilio');

const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const testSMS = async () => {
    try {
        const response = await client.messages.create({
            body: 'hlw Amar This is Reminder from efarming 🤖 !',
            from: process.env.TWILIO_PHONE_NUMBER, 
            to: '+917020243881'
        });
        console.log('✅ SMS sent successfully:', response.sid);
    } catch (error) {
        console.error('❌ Failed to send SMS:', error.message);
        console.error('Error code:', error.code);
        console.error('More details:', error);
    }
};

testSMS();
