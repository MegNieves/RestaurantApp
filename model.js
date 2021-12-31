var
    mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    plateSchema = new Schema({
      name: String,
      category: {type: String, required: true},
      price: Number,
    })

    module.exports = {
        plates: mongoose.model('Plate', plateSchema)
    }