const Trade = require("../models/TradeSchenma");
const fs = require("fs");
const { parseCSV } = require("../utils/csvParser");

//Function to upload trades
const uploadTrades = async (req, res) => {
	const filePath = req.file.path;
	try {
		const trades = await parseCSV(filePath);
		await Trade.insertMany(trades);
		fs.unlinkSync(filePath);
		res.status(200).send("File uploaded and data stored successfully");
	} catch (err) {
		res.status(500).send("Error storing data");
	}
};


module.exports = { uploadTrades};
