const db = require('../models');

//Katie--> include bio for each
db.Adoption.create([
    {
      animal_type: "dog",
      breed: "Labrador Retreiver",
      color: "yellow",
      gender: "female",
      name: "Lucille",
      age: 2, 
      age_unit: "years", 
      health_history: "none",
      pic: "https://cdn.pixabay.com/photo/2016/08/08/23/57/dog-1579614_960_720.jpg"
    },{
      animal_type: "dog",
      breed: "French Bulldog",
      color: "fawn",
      gender: "female",
      name: "Maude",
      age: 5,
      age_unit: "years",
      health_history: "deaf",
      pic: "https://cdn.pixabay.com/photo/2019/12/22/17/13/french-bulldog-4713013_960_720.jpg"
    },{
      animal_type: "dog",
      breed: "Golden Retreiver",
      color: "light golden",
      gender: "male",
      name: "Walter",
      age: 2,
      age_unit: "months",
      health_history: "none",
      pic: "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_960_720.jpg"
    },{
      animal_type: "dog",
      breed: "Golden Retreiver",
      color: "golden",
      gender: "male",
      name: "Jesse",
      age: 2,
      age_unit: "months",
      health_history: "none",
      pic: "https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036_960_720.jpg"
    },{
      animal_type: "dog",
      breed: "Dachshund",
      color: "black/tan",
      gender: "male",
      name: "Hotdog",
      age: 3,
      age_unit: "months",
      health_history: "mild skin condition",
      pic: "https://pixabay.com/photos/dachshund-puppy-pet-canine-animal-1519374/"
    },{
      animal_type: "reptile",
      breed: "Bearded Dragon",
      color: "tan",
      gender: "male",
      name: "Toothless",
      age: 4,
      age_unit: "years",
      health_history: "missing some teeth",
      pic: "https://pixabay.com/photos/bearded-dragon-pet-lizard-dragon-4052825/"
    }
  ])

.then(() => {
  console.log('Success!');
  process.exit();
})

.catch(err => {
  console.log('Error', err);
  process.exit();
})