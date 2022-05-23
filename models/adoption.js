const mongoose = require('mongoose');

//adoption pets
const adoptionSchema = new mongoose.Schema({
    animal_type: { type: String, required: true},
    breed: String,
    color: String,
    gender: String,
    name: String,
    age: Number,
    age_unit: String,
    health_history: String,
    pic: {type: String, default: 'http://placekitten.com/200/200'}
    
})

//exporting Adoption database
module.exports = mongoose.model('Adoption', adoptionSchema);