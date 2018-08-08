let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let taskShema = new Schema({
  name:         String,
  description:  String,
  done:         Boolean
});

let taskInfo = mongoose.model('taskInfo', taskShema);


module.exports = taskInfo;
