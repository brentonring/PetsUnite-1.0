const db = require('../models');

async function seedServiceComment() {
    try {
        let service = await db.Service.findOne({ service: 'feeding' })
    
        // fake sample comment
        let comment = await db.Servicecomment.create({
            author: 'Lazy Daisy',
            event: false,
            content: "Count me in!"
        })

        // add comment to the events comment array
        service.comments.push(comment.id)

        // save the event now that it has a comment
        await service.save()

        // exit the program
        process.exit()
    } 
    catch(err) {
        console.log(err)
    }

};

seedServiceComment();