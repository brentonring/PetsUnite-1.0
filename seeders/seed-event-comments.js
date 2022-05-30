const db = require('../models');

async function seed() {
    try {
        let event = await db.Event.findOne({ event_name: 'Doggie Play Date' })
    
        // fake sample comment
        let comment = await db.Eventcomment.create({
            author: 'Chatty Patty',
            event: false,
            // stars: 5.0,
            content: "Count me in!"
        })

        // add comment to the events comment array
        event.comments.push(comment.id)

        // save the event now that it has a comment
        await event.save()

        // exit the program
        process.exit()
    } catch(err) {
        console.log(err)
    }

};

seed()