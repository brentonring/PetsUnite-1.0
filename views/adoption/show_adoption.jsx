const React = require('react')
const Def = require('../default')

function showPet (data) {
    return (
        <Def>
             <main>
                <h1>I'M READY FOR MY NEW FAMILY!</h1>
                <img id="home-image" src="/images/krista-mangulsone-9gz3wfHr65U-unsplash.jpg" alt="Puppies and Kitties image"></img>
                {/* <img src={data.pets.pic}/> */}
                {/* <h2>Hi! My Name Is {data.pets.name}</h2> */}
                <h3>I'm Available</h3>
                {/* <p>Type: {[data.pets.type]}</p>
                <p>Breed: {[data.pets.breed]}</p>
                <p>Gender: {[data.pets.gender]}</p>
                <p>Age: {[data.pets.age]}</p>
                <p>Health history: {[data.pets.health]}</p>
                // ADD some favicons next to the <p> tags above???
                <a href={`/adoption/${data.id}/edit`} className='btn btn-warning'>Edit</a>
                <form method='POST' action={`/adoption/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>Delete</button>
                </form> */}
                <h2>Comments</h2>
                <p>No comments yet!</p>
            </main>
        </Def>
    )

}


module.exports = showPet;