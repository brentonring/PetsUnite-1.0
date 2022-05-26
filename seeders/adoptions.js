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
      bio: "Look at that face! Lucy, for short, is a sweet girl. She loves tennis balls and will play fetch for hours! She gets along great with most other pets and children. She's looking for a new home to share her love in.",
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
      bio: "Miss Maude is about the cutest thing EVER! She is deaf but knows some basic commands and is eager to please. She is looking for a home that will be able to learn how to communicate with her. Just be ready for lots of joy and kisses!!",
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
      bio: "Walter is a sweet and shy boy! He also VERY smart! He knows how to sit and is working on lay down. The sky is the limit for this boy in his new home!",
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
      bio: "Jesse is goofy and very silly! He loves to run around and play with his litter mates. He'll be a great, active addition to any home.",
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
      bio: "This adorable boy's favorite things are snuggling under blankets and taking leisurly strolls in the evening. Hotdog tends to get rashes and requires a grain-free diet that manages his skin issues well.",
      pic: "https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg"
    },{
      animal_type: "reptile",
      breed: "Bearded Dragon",
      color: "tan",
      gender: "male",
      name: "Toothless",
      age: 4,
      age_unit: "years",
      health_history: "missing some teeth",
      bio: "Toothless is a lazy lizard who's looking for an adventourous soul for a new compantion. He's mellow and easy to care for and loves crickets.",
      pic: "https://cdn.pixabay.com/photo/2019/03/13/12/23/bearded-dragon-4052825_1280.jpg"
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