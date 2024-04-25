const express = require("express");
const cors = require('cors');
const { config, opinion } = require("./content");
const app = express();

app.use(
	express.json({
		strict: true,
	})
);

app.use(cors());

app.get("/config", (req, res) => {
	res.send(config)
});

app.get("/opinion", (req, res) => {
	res.send(opinion);
});

app.listen(7777);

module.exports = app;