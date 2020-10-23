const { Schema, model } = require("mongoose");
const mongoose = require("../db/connection");
const Day = require('./day')

const catSchema = new Schema(
  {
      foodItem: String,
      calories: Number
  },
);

const Food = model("Food", catSchema);

module.exports = Food;