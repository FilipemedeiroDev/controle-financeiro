const mongoose  = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: ObjectId,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;