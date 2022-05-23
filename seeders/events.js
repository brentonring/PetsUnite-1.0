const db = require('../models');

//Katie--> include event description for each
db.Event.create([
  {
    event_name: "Doggie Play Date",
    date: "06/11/2022",
    start_time: "11:00am",
    end_time: "12:30pm",
    location: "Dorothea Dix Dog Park",
    address: "801 Biggs Dr",
    city: "Raleigh",
    state: "NC",
    pic: "https://pixabay.com/photos/bordeaux-mastiff-grass-running-7170006/"
  },{
    event_name: "Keeping Chickens in the City",
    date: "06/18/2022",
    start_time: "1:00pm",
    end_time: "3:00pm",
    location: "The Urban Chicken",
    address: "8825 Westgate Park Dr",
    city: "Raleigh",
    state: "NC",
    pic: "https://pixabay.com/photos/chicks-chickens-brooder-farm-5147119/"
  },{
    event_name: "So you Want a Guinea Pig",
    date: "06/18/2022",
    start_time: "3:00pm",
    end_time: "4:00pm",
    location: "Petco",
    address: "6220 Glenwood Ave",
    city: "Raleigh",
    state: "NC",
    pic: "https://pixabay.com/photos/guinea-pig-animal-rodent-cute-3442756/"
  },{
    event_name: "How to Groom your Pet Bird",
    date: "06/23/2022",
    start_time: "7:00pm",
    end_time: "8:00pm",
    location: "Virtual Zoom Meeting",
    address: "TBA",
    city: "NA",
    state: "NA",
    pic: "https://pixabay.com/photos/bird-birdie-cockatiel-colorful-bird-2603450/"
  },{
    event_name: "What to Feed your Pet Snake",
    date: "06/25/2022",
    start_time: "3:00pm",
    end_time: "4:00pm",
    location: "Petco",
    address: "6220 Glenwood Ave",
    city: "Raleigh",
    state: "NC",
    pic: "https://pixabay.com/photos/snake-reptile-animal-rosy-pet-5424165/"
  },{
    event_name: "Cat Massage",
    date: "06/26/2022",
    start_time: "11:00am",
    end_time: "1:00pm",
    location: "Purr Cup Cafe",
    address: "210 Prospect Ave",
    city: "Raleigh",
    state: "NC",
    pic: "https://pixabay.com/photos/cat-friendship-animals-pet-1148305/"
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