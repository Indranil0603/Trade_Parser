// routes/tradeRoutes.js
const express = require('express');
const router = express.Router();
const { uploadTrades} = require('../controllers/TradeController.js');
const upload = require('../middleware/upload');

router.post('/upload', upload.single('file'), uploadTrades);

module.exports = router;
