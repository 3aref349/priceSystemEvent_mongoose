const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'adminPerson'
  },
  prices: [
    {
      type: Schema.Types.ObjectId,
      ref: 'NewPRice'
    }
  ]
});

module.exports = mongoose.model('Admin', adminSchema);
