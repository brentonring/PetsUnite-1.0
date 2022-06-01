const db = require('../models');

db.Event.create([
  {
    event_name: "Fun Doggie Play Date",
    date: "06/11/2022",
    start_time: "11:00am",
    end_time: "12:30pm",
    location: "Dorothea Dix Dog Park",
    address: "801 Biggs Dr",
    city: "Raleigh",
    state: "NC",
    event_details: "Hey folks! This is our regular scheduled doggie play date and as always, it weather permitted. Bring your playful pooch to the park to spend some time with some human and animal friends! The time will sure to wear your pupper out!",
    pic: "https://cdn.pixabay.com/photo/2022/05/02/16/24/bordeaux-mastiff-7170006_960_720.jpg"
  },{
    event_name: "Keeping Chickens in the City",
    date: "06/18/2022",
    start_time: "1:00pm",
    end_time: "3:00pm",
    location: "The Urban Chicken",
    address: "8825 Westgate Park Dr",
    city: "Raleigh",
    state: "NC",
    event_details: "Urban Chicken ordinances are changing to make it easier to have chickens in the city. This event will focus on the benefits of raising chickens in your backyard.",
    pic: "https://cdn.pixabay.com/photo/2020/05/08/19/53/chicks-5147119_960_720.jpg"
  },{
    event_name: "So you Want a Guinea Pig?",
    date: "06/18/2022",
    start_time: "3:00pm",
    end_time: "4:00pm",
    location: "Petco",
    address: "6220 Glenwood Ave",
    city: "Raleigh",
    state: "NC",
    event_details: "Guinea pigs can be a great pet but like all companion animals, they require time and attention. This youth-friendly class will discuss the considerations of adopting one of these furry friends.",
    pic: "https://cdn.pixabay.com/photo/2013/11/10/20/05/guinea-pig-208438_960_720.jpg"
  },{
    event_name: "How to Groom your Pet Bird",
    date: "06/23/2022",
    start_time: "7:00pm",
    end_time: "8:00pm",
    location: "Virtual Zoom Meeting",
    address: "TBA",
    city: "NA",
    state: "NA",
    event_details: "Does your feathered friends nails some trimming? Maybe Birdie could use a bath? This web event will walk you through the how to's of grooming your bird.",
    pic: "https://cdn.pixabay.com/photo/2017/08/07/12/41/paige-2603450_960_720.jpg"
  },{
    event_name: "What to Feed your Pet Snake",
    date: "06/25/2022",
    start_time: "3:00pm",
    end_time: "4:00pm",
    location: "Petco",
    address: "6220 Glenwood Ave",
    city: "Raleigh",
    state: "NC",
    event_details: "Experts are forming an event just for snake pet owners! All the basic do's and don'ts for feeding your snakes will be covered during this event.",
    pic: "https://cdn.pixabay.com/photo/2020/07/20/19/40/snake-5424165_960_720.jpg"
  },{
    event_name: "Relaxing Cat Massage",
    date: "06/26/2022",
    start_time: "11:00am",
    end_time: "1:00pm",
    location: "Purr Cup Cafe",
    address: "210 Prospect Ave",
    city: "Raleigh",
    state: "NC",
    event_details: "Petting is so passe... what your cats wants is a massage! Learn the benefits of cat massage from a trained professional. In this class we will be practicing on stuffed animal cats! Herbal tea will be provided.",
    pic: "https://cdn.pixabay.com/photo/2016/01/19/10/38/cat-1148305_960_720.jpg"
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