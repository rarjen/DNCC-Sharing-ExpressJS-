require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const router = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT } = process.env;

app.use(morgan("dev")); // for logging
app.use(express.json()); // read body type json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(router);

app.use((req, res, next) => {
  return res.status(404).json({
    status: false,
    message: "Are you lost?",
  });
});
// 500 handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).json({
    status: false,
    message: err.message,
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
