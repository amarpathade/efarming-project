const express = require('express');
const { sendMessage } = require('../controllers/smsController');

const router = express.Router();

router.post('/send', sendMessage);

module.exports = router;
