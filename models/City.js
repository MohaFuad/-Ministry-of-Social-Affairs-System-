const mongoose = require('mongoose')

const CitySchema = new mongoose.Schema(
  {
    name: {
      type: String,},
    
    state: {
        type: mongoose.Types.ObjectId,
        ref:'State',},
    
    },

)

module.exports = mongoose.model('City', CitySchema)