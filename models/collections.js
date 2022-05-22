// Alissa, I commented out my updated code but it should be how we wanted it as of Friday evening.
//I left your filler code as is.

// module.exports = [
//   {
//     animal_type: "dog",
//     breed: "Labrador Retreiver",
//     color: "yellow",
//     gender: "female",
//     name: "Lucille",
//     age: 2, //number
//     age_unit: "years", //string
//     health_history: "none",
//     pic: "https://cdn.pixabay.com/photo/2016/08/08/23/57/dog-1579614_960_720.jpg"
//   },{
//     animal_type: "dog",
//     breed: "French Bulldog",
//     color: "fawn",
//     gender: "female",
//     name: "Maude",
//     age: 5,
//     age_unit: "years", //string
//     health_history: "deaf",
//     pic: "https://cdn.pixabay.com/photo/2019/12/22/17/13/french-bulldog-4713013_960_720.jpg"
//   },{
//     animal_type: "dog",
//     breed: "Golden Retreiver",
//     color: "light golden",
//     gender: "male",
//     name: "Walter",
//     age: 9,
//     age_unit: "weeks", 
//     health_history: "none",
//     pic: "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_960_720.jpg"
//   },{
//     animal_type: "dog",
//     breed: "Golden Retreiver",
//     color: "golden",
//     gender: "male",
//     name: "Jesse",
//     age: 9,
//     age_unit: "weeks",
//     health_history: "none",
//     pic: "https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036_960_720.jpg"
//   },];

const mongoose = require('mongoose');

///katie to update this page
//user schema
const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true},
  last_name: { type: String, required: true},
  email: { type: String, required: true},
  username: { type: String, required: true},
  password: { type: String, required: true},
  
})
module.exports = mongoose.model('User', userSchema);

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
module.exports = mongoose.model('Adoption', adoptionSchema);

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
module.exports = mongoose.model('Event', eventSchema);

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
  pic: {type: String, default: 'http://placekitten.com/200/200'},
  
})
module.exports = mongoose.model('Service', serviceSchema);
