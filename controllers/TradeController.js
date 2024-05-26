const Trade = require("../models/TradesSchema.js");
const fs = require("fs");
const { parseCSV } = require("../utils/csvParser.js");

//Function to upload trades
const uploadTrades = async (req, res) => {
    
    // Handle the case where req.file or req.file.path is undefined
    if (!req.file || !req.file.path) {
        res.status(400).send("No file uploaded or file path is missing");
        return;
    }

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
