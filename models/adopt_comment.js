const mongoose = require('mongoose');

let adoptcommentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    adopt: { type: Boolean, default: false },
    content: { type: String, default: '' }
})

module.exports = mongoose.model('AdoptComment', adoptcommentSchema);