const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// Define collection and schema
let Course = new Schema({
  courseName: String,
  description:String,
  duration: String,
  videos: [{
    name:String,
    videopath:String
 }]  
}, {
  collection: 'courses'
})

module.exports = mongoose.model('Course',Course)