const db_event = require('../models/collections') 
// const { db } = require('../models/Collections/collections')

//katie to change time to start and end time, date, city and state break out from address, use this first entry
db_event.create ([
  {
    event_name: "Doggie Play Date",
    date: "06/11/22",
    start_time: "11:00am",
    end_time: "12:30pm",
    location: "Dorothea Dix Dog Park",
    address: "801 Biggs Dr",
    city: "Raleigh",
    state: "NC",
    pic: "https://pixabay.com/photos/bordeaux-mastiff-grass-running-7170006/"
  },{
    event_name: "Keeping Chickens in the City",
    date: "Saturday, June 18th, 2022",
    time: "1-3pm",
    location: "The Urban Chicken",
    address: "8825 Westgate Park Dr, #102, Raleigh, NC 27617",
    pic: "https://pixabay.com/photos/chicks-chickens-brooder-farm-5147119/"
  },{
    event_name: "So you Want a Guinea Pig",
    date: "Saturday, June 18th, 2022",
    time: "3-4pm",
    location: "Petco",
    address: "6220 Glenwood Ave, we #104, Raleigh, NC 27612",
    pic: "https://pixabay.com/photos/guinea-pig-animal-rodent-cute-3442756/"
  },{
    event_name: "How to Groom your Pet Bird",
    date: "Thursday, June 23rd, 2022",
    time: "7-8pm",
    location: "Virtual Zoom Meeting",
    address: "TBA",
    pic: "https://pixabay.com/photos/bird-birdie-cockatiel-colorful-bird-2603450/"
  },{
    event_name: "What to Feed your Pet Snake",
    date: "Saturday, June 25th, 2022",
    time: "3-4pm",
    location: "Petco",
    address: "6220 Glenwood Ave, we #104, Raleigh, NC 27612",
    pic: "https://pixabay.com/photos/snake-reptile-animal-rosy-pet-5424165/"
  },{
    event_name: "Cat Massage",
    date: "Sunday, June 26th, 2022",
    time: "11-1pm",
    location: "Purr Cup Cafe",
    address: "210 Prospect Ave, Raleigh, NC,  27603",
    pic: "https://pixabay.com/photos/cat-friendship-animals-pet-1148305/"
  }
])

.then(() => {
  console.log('Success!');
  process.exit();
})
.catch(err => {
  console.log("Fail!", err);
  process.exit();
})