const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define collection and schema
let Registration = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  mobile: {
    type: String
  },
  password: {
    type: String
  },
  repassword: {
    type: String
  }
}, {
  collection: 'registration'
})

module.exports = mongoose.model('Registration', Registration)