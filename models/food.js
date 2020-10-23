const { Schema, model } = require("mongoose");


const foodSchema = new Schema(
  {
      foodItem: String,
      calories: Number
  },
);

const Food = model("Food", foodSchema);

module.exports = Food;