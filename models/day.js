const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const ownerSchema = new Schema({
    date:  String,
    time: String,
    food: [
        { ref: 'Food', type: Schema.Types.ObjectId}
    ]
})

const Owner = mongoose.model('Owner', ownerSchema)

module.exports = Owner