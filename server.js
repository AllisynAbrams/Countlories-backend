require("dotenv").config();
const { PORT = 3000, NODE_ENV = "development" } = process.env;

const mongoose = require("./db/connection")

const cors = require("cors");
const corsOptions = require("./configs/cors");

const express = require("express");
const app = express();

// other import
const morgan = require("morgan");
const foodRouter = require("./controllers/food");
const dayRouter = require("./controllers/day")

// MIDDLEWARE
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(cors())//ANYBOFY CAN MAKE A REQUEST TO ALL ROUTE 
app.use(express.json());
app.use(morgan("tiny")); //logging


// app.get("/", (req, res) => {
//     res.json({ hello: "Hello World!" });
//   });
  

app.use("/food", foodRouter);

app.use("/", dayRouter);


app.listen(PORT, () => {
    console.log(`Your are listening on port ${PORT}`);
});
  