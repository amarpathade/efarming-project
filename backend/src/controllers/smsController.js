const { sendSMS } = require('../services/smsService');

const sendMessage = async (req, res) => {
    const { phone, message } = req.body;

    if (!phone || !message) {
        return res.status(400).json({ error: 'Phone and message required' });
    }

    try {
        const response = await sendSMS(phone, message);
        res.status(200).json({ success: true, sid: response.sid });
    } catch (error) {
        console.error('Failed to send SMS:', error.message); // Error ko log karo
        res.status(500).json({ error: error.message });
    }
};

module.exports = { sendMessage };
