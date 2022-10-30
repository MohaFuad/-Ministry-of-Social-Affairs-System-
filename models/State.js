
const mongoose = require('mongoose')

const StateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
StateSchema.virtual('cities', {
  ref: 'City',
  localField: '_id',
  foreignField: 'state',
  justOne: false,
});

module.exports = mongoose.model('State', StateSchema)
 