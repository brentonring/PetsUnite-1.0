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
    bio: String,
    pic: {type: String, default: 'https://cdn.pixabay.com/photo/2014/12/17/05/22/dog-571125__340.jpg'}
    
})

//exporting Adoption database
module.exports = mongoose.model('Adoption', adoptionSchema);