const mongoose = require('mongoose');

//services schema
const serviceSchema = new mongoose.Schema({
    service: { type: String, required: true},
    animal_type: String,
    breed: String,
    gender: String,
    name: String,
    age: Number,
    age_unit: String,
    health_history: String,
    pic: {type: String, default: 'http://placekitten.com/200/200'},
    
  })
  module.exports = mongoose.model('Service', serviceSchema);