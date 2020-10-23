const { Schema, model } = require("mongoose");
const mongoose = require("../db/connection");
const Day = require('./day')

const foodSchema = new Schema(
  {
      foodItem: String,
      calories: Number
  },
);

const Food = model("Food", foodSchema);

module.exports = Food;