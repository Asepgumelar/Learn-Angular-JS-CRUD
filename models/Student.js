var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Student = new Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  age: {
    type: Number
  }
},{
    collection: 'students'
});

module.exports = mongoose.model('Student', Student);
