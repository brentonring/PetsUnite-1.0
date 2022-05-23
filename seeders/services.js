const db = require('../models');

//Katie-->include event description for each
//add age_unit to each
db.Service.create([
    {
      service: "feeding",
      animal_type: "reptile",
      breed: "Corn Snake",
      gender: "male",
      name: "Draco",
      age: 3 , //number
      age_unit: "years", //string
      health_history: "none",
      pic: "https://cdn.pixabay.com/photo/2018/03/22/00/43/corn-snake-3248897_1280.jpg"
    },{
      service: "walking",
      animal_type: "dog",
      breed: "Great Dane",
      gender: "male",
      name: "Truman",
      age: "6 years",
      health_history: "food allergies",
      pic: "https://pixabay.com/photos/great-dane-dog-lying-animal-3387239/"
    },{
      service: "medication",
      animal_type: "cat",
      breed: "domestic short hair",
      gender: "male",
      name: "Stan",
      age: "14 years",
      health_history: "diabetes",
      pic: "https://pixabay.com/photos/cat-weary-sleep-sweet-animals-2327899/"
    },{
      service: "pet sitting",
      animal_type: "dog",
      breed: "Weimaraner",
      gender: "female",
      name: "Connie",
      age: "1 years",
      health_history: "none",
      pic: "https://pixabay.com/photos/weimaraner-puppy-dog-snout-1381186/"
    },{
      service: "grooming",
      animal_type: "dog",
      breed: "mixed breed",
      gender: "male",
      name: "Arlo",
      age: "7 years",
      health_history: "none",
      pic: "https://pixabay.com/photos/dog-mixed-breed-dog-hybrid-cute-2203194/"
    },{
      service: "grooming",
      animal_type: "bird",
      breed: "Parakeet",
      gender: "female",
      name: "Andrea",
      age: "4 years",
      health_history: "none",
      pic: "https://pixabay.com/photos/budgerigar-parakeet-green-bird-204706/"
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