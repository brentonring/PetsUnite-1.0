const mongoose = require('mongoose');

//DATABASE
const mongooseURI = process.env.MONGO_URI;

mongoose.connect(mongooseURI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log('connected to mongo: ', mongooseURI)}
)

module.exports.Place = require('./collections');