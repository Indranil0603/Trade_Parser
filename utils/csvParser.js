const csv = require("csv-parser");
const fs = require("fs");

const parseCSV = (filePath) => {
	return new Promise((resolve, reject) => {
		const results = [];
		fs.createReadStream(filePath)
			.pipe(csv())
			.on("data", (data) => {
				const [base_coin, quote_coin] = data.Market.split("/");
				results.push({
                    user_id: data.User_ID,
					utc_time: new Date(data.UTC_Time),
					operation: data.Operation,
					base_coin: base_coin.trim(),
					quote_coin: quote_coin.trim(),
					amount: parseFloat(data["Buy/Sell Amount"]),
					price: parseFloat(data.Price),
				});
			})
			.on("end", () => resolve(results))
			.on("error", (error) => reject(error));
	});
};

module.exports = { parseCSV };
