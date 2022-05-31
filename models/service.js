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
    details: String,
    pic: {type: String, default: 'https://cdn.pixabay.com/photo/2017/12/25/11/32/cat-3038243__340.jpg'},
    comments: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Servicecomment' 
    }],
});

//exporting Service database
module.exports = mongoose.model('Service', serviceSchema);