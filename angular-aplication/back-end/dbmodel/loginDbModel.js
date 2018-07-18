let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let loginShema = new Schema({
  name: String,
  password: String,
  admin: Boolean
});

let loginInfo = mongoose.model('loginInfo', loginShema);


module.exports = loginInfo;
