require("dotenv").config();
const { PORT = 4000, NODE_ENV = "development" } = process.env;

const mongoose = require("./db/connection")

const cors = require("cors");
const corsOptions = require("./configs/cors");

const express = require("express");
const app = express();

const morgan = require("morgan");

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
  });
  
app.listen(PORT, () => {
    console.log(`Your are listening on port ${PORT}`);
});
