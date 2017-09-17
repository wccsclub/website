var mongoose = require('mongoose');

var memberSchema = mongoose.Schema({
  name: String,
  imageUri: String,
  position: String,
  hometown: String,
  about: String
});



var Member = mongoose.model('Member', memberSchema);

module.exports = {
    Member: Member
};
