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
      details: "I'm looking for someone willing to stop in and feed my pet Draco. I will be out of town for 2 weeks and need him to be given a meal only once. WARNING: This involves feeding him a thawed, dead mouse.",
      pic: "https://cdn.pixabay.com/photo/2018/03/22/00/43/corn-snake-3248897_1280.jpg"
    },{
      service: "walking",
      animal_type: "dog",
      breed: "Great Dane",
      gender: "male",
      name: "Truman",
      age: 6,
      age_unit: "years",
      health_history: "food allergies",
      details: "Truman had knee surgery a few months ago and needs a few sort walks a day to keep up with his rehab. I'm looking for someone to walk him twice during the weekdays as I am at work and can't get home to take him.",
      pic: "https://cdn.pixabay.com/photo/2018/05/10/10/35/great-dane-3387239_960_720.jpg"
    },{
      service: "medicating",
      animal_type: "cat",
      breed: "domestic short hair",
      gender: "male",
      name: "Stan",
      age: 14,
      age_unit: "years",
      health_history: "diabetes",
      details: "I'm looking for someone to stay with my cat for the weekend. He needs someone to stay with most of the time and who can give him shots of insulin every 12 hours. He is a sweet, gentle old man and would love to snuggle!",
      pic: "https://cdn.pixabay.com/photo/2017/05/19/23/54/cat-2327899_960_720.jpg"
    },{
      service: "pet sitting",
      animal_type: "dog",
      breed: "Weimaraner",
      gender: "female",
      name: "Connie",
      age: 7,
      age_unit: "months",
      health_history: "none",
      details: "Connie would LOVE to stay with you for a week next month if you'll have her! She is very sweet with people but doesn't get along with other dogs which is why I'm chosing to not have her stay at a dog spa while I'm away.",
      pic: "https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_960_720.jpg"
    },{
      service: "grooming",
      animal_type: "dog",
      breed: "mixed breed",
      gender: "male",
      name: "Arlo",
      age: 7,
      age_unit: "years",
      health_history: "none",
      details: "My dog Arlo needs a new groomer. He went to the same one for a long time but she's moving to the beach. He is timid about getting groomed and I'm looking for any recommendations for a patient groomer who will tolerate his... sensitivities",
      pic: "https://cdn.pixabay.com/photo/2017/04/04/21/15/dog-2203194_960_720.jpg"
    },{
      service: "grooming",
      animal_type: "bird",
      breed: "Parakeet",
      gender: "female",
      name: "Andrea",
      age: 4,
      age_unit: "years",
      health_history: "none",
      details: "Looking for a extra set of hands to help me groom my beautiful Andrea. Mainly with trimming her nails. I'd prefer only people who have handled birds reply. Thank you.",
      pic: "https://cdn.pixabay.com/photo/2013/11/03/03/08/budgerigar-parakeet-204706_960_720.jpg"
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