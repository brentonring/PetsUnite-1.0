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
    pic: {type: String, default: 'http://placekitten.com/200/200'},
})

//exporting Event database
module.exports = mongoose.model('Event', eventSchema);