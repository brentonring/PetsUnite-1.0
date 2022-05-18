const mongoose = require('mongoose');

const adoptionSchema = new mongoose.Schema({
  name: { type: String, required: true},
  animal_type: String,
  pic: {type: String, default: 'http://placekitten.com/200/200'},
  
})

module.exports = mongoose.model('Adoption', adoptionSchema);

