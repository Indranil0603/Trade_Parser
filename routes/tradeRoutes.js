// routes/tradeRoutes.js
const express = require('express');
const router = express.Router();
const { uploadTrades } = require('../controllers/TradeController.js');
const { getBalance } = require('../controllers/balanceController.js');
const upload = require('../middleware/upload');


router.post('/upload', upload.single('file'), uploadTrades);
router.get('/getBalance', getBalance);

module.exports = router;
