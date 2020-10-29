const mongoose = require('../db/connection')
const Schema = mongoose.Schema

// our day and food models are related as the daySchema references the Food model to take in an array of food objects from the foodSchema
const daySchema = new Schema({
    day: String,
    date: String,
    food: [
        { ref: 'Food', type: Schema.Types.ObjectId}
    ]
})

const Day = mongoose.model('Day', daySchema)

module.exports = Day