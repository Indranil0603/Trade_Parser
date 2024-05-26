const calculateBalance = require("../utils/balanceCalculator.js");
const Trade = require("../models/TradesSchema.js");

const getBalance = async (req, res) => {
	const { timestamp } = req.body;
	if (!timestamp) {
		return res.status(400).json({ error: "Timestamp is required" });
	}

	try {
		const trades = await Trade.find({
			utc_time: { $lte: new Date(timestamp) },
		});
		const balances = calculateBalance(trades);
		res.status(200).json(balances);
	} catch (err) {
        console.log(err);
		res.status(500).send("Error retrieving balance");
	}
};
module.exports = { getBalance };
