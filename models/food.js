const { Schema, model } = require("mongoose");
const mongoose = require("../db/connection");
const Day = require("./day");

//CAT SCHEMA
const catSchema = new Schema(
  {
      foodItem: String,
      calories: Number
  },
);

//DOG MODEL
const Food = model("Food", catSchema);

//EXPORT MODEL
module.exports = Food;