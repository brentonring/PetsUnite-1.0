const mongoose = require('mongoose');

let eventcommentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    event: { type: Boolean, default: false },
    // stars: { type: Number, required: true },
    content: { type: String, default: '' }
})

module.exports = mongoose.model('Eventcomment', eventcommentSchema);