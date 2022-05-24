const mongoose = require('mongoose');

//user schema
const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true},
    last_name: { type: String, required: true},
    email: { type: String, required: true},
    about_me: String,
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    
})

//exporting User database
module.exports = mongoose.model('User', userSchema);