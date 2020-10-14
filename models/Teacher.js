var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Teacher = new Schema({
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
    collection: 'teachers'
});

module.exports = mongoose.model('Teacher', Teacher);
