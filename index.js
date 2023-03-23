const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_CONNECTION_SRTING = process.env.MONGO_CONNECTION_SRTING;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.json({
    data: [],
  });
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_SRTING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Express Application is running on http://localhost:${PORT}`);
});
