const db = require('../models/adoption')

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
      pic: "https://pixabay.com/photos/dog-nose-yellow-lab-labrador-loyal-1579614/"
    },{
      animal_type: "dog",
      breed: "French Bulldog",
      color: "fawn",
      gender: "female",
      name: "Maude",
      age: 5,
      age_unit: "years",
      health_history: "deaf",
      pic: "https://pixabay.com/photos/french-bulldog-dog-pet-canine-4713013/"
    },{
      animal_type: "dog",
      breed: "Golden Retreiver",
      color: "light golden",
      gender: "male",
      name: "Walter",
      age: 2,
      age_unit: "months",
      health_history: "none",
      pic: "https://pixabay.com/photos/puppy-golden-retriever-dog-young-1207816/"
    },{
      animal_type: "dog",
      breed: "Golden Retreiver",
      color: "golden",
      gender: "male",
      name: "Jesse",
      age: 2,
      age_unit: "months",
      health_history: "none",
      pic: "https://pixabay.com/photos/dog-puppy-golden-retriever-breed-4372036/"
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
    console.log('Success!')
    process.exit()
  })

  .catch(err => {
    console.log('Error', err)
    process.exit()
  })