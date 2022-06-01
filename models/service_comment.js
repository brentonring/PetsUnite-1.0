const mongoose = require('mongoose');

let servicecommentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    service: { type: Boolean, default: false },
    content: { type: String, default: '' }
})

module.exports = mongoose.model('ServiceComment', servicecommentSchema);