const express = require("express");
const bodyParser = require('body-parser');

const connectDB = require("./config/db");
const tradeRoutes = require("./routes/tradeRoutes.js")

const app = express();
app.use(bodyParser.json());
// Connect to MongoDB
connectDB();

// Use Routes
app.use('/api/trades', tradeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
