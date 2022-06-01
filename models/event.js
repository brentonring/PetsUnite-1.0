const mongoose = require('mongoose');

//events schema
const eventSchema = new mongoose.Schema({
    event_name: { type: String, required: true},
    date: String,
    start_time: String,
    end_time: String,
    location: String,
    address: String,
    city: String,
    state: String,
    event_details: String,
    pic: {type: String, default: 'https://cdn.pixabay.com/photo/2020/10/06/11/50/dog-5632005__340.jpg'},
    comments: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'EventComment' 
    }],
})

//exporting Event database
module.exports = mongoose.model('Event', eventSchema);