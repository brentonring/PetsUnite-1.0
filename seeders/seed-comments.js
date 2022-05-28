const db = require('../models');

async function seed() {
    try {
        let pet = await db.Adoption.findOne({ name: 'Lucille' })
    
        // fake sample comment
        let comment = await db.Comment.create({
            author: 'Chatty Patty',
            adopt: false,
            // stars: 5.0,
            content: "Wow, what a beautiful dog! We are interested in adopting!"
        })

        // add comment to the pets comment array
        pet.comments.push(comment.id)

        // save the pet now that it has a comment
        await pet.save()

        // exit the program
        process.exit()
    } catch(err) {
        console.log(err)
    }

};

seed()