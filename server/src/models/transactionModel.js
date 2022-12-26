const mongoose  = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TransactionSchema = new Schema({
  id: ObjectId,
  user_id: {
    type: ObjectId,
    ref: 'users'
  },
  description: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

const TransactionModel = mongoose.model('transactions', TransactionSchema);

module.exports = TransactionModel;