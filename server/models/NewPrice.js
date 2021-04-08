const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newPriceSchema = new Schema({
  appDate: {
    type: Date, 
    default: (new Date()).getDate() ,
    required: true
  },

  appTime: {
    type: Number, 
    default: (new Date()).getTime(),
    required: true
  },
  Gasoline80: {
    type: Number,
    required: true
  },
  Gasoline92: {
    type: Number,
    required: true
  },
  Gasoline95: {
    type: Number,
    required: true
  },
  Diesel: {
    type: Number,
    required: true
  },
 approved:{
approve: Boolean
 },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }

  
},
{ timestamps: true }
);

module.exports = mongoose.model('NewPrice', newPriceSchema);