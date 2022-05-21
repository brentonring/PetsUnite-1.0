const mongoose = require('mongoose');

///katie to update this page
//adoption pets
const adoptionSchema = new mongoose.Schema({
  animal_type: { type: String, required: true},
  breed: String,
  color: String,
  gender: String,
  name: String,
  age: Number,
  health_history: String,
  pic: {type: String, default: 'http://placekitten.com/200/200'},
  
})
module.exports = mongoose.model('Adoption', adoptionSchema);

//events schema
const eventSchema = new mongoose.Schema({
  animal_type: { type: String, required: true},
  breed: String,
  color: String,
  gender: String,
  name: String,
  age: Number,
  health_history: String,
  pic: {type: String, default: 'http://placekitten.com/200/200'},
  
})
module.exports = mongoose.model('Event', eventSchema);

//services schema
const serviceSchema = new mongoose.Schema({
  animal_type: { type: String, required: true},
  breed: String,
  color: String,
  gender: String,
  name: String,
  age: Number,
  health_history: String,
  pic: {type: String, default: 'http://placekitten.com/200/200'},
  
})
module.exports = mongoose.model('Service', serviceSchema);

//user schema
const userSchema = new mongoose.Schema({
  animal_type: { type: String, required: true},
  breed: String,
  color: String,
  gender: String,
  name: String,
  age: Number,
  health_history: String,
  pic: {type: String, default: 'http://placekitten.com/200/200'},
  
})
module.exports = mongoose.model('User', userSchema);
