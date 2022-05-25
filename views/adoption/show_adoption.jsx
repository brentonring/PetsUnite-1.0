const React = require('react')
const Def = require('../default')

function showPet(data) {
    return (
        <Def>
            <main id="main-container">
                <h1>I'M READY FOR MY NEW FAMILY!</h1>                
                <img src={data.pets.pic} />
                <h2>Hi! My Name Is {data.pets.name}</h2>
                <h3>I'm Available</h3>                
                <li className='list-group-item text-capitalize rounded'>
                    <img id="icons" src="/images/icons/icon_bread32.png"></img>{data.pets.breed}
                </li>
                <li className='list-group-item text-capitalize rounded'>
                    <img id="icons" src="/images/icons/icon_gender32.png"></img>{data.pets.gender}
                </li>
                <li className='list-group-item text-capitalize rounded'>
                    <img id="icons" src="/images/icons/icon_bday32.png"></img>{data.pets.age} {data.pets.age_unit}
                </li>
                <li className='list-group-item text-capitalize rounded'>
                    <img id="icons" src="/images/icons/icon_heartbeat32.png"></img><span>Health History: {data.pets.health_history}</span>
                </li>
                <a href={`/adoption/${data.pets.id}/edit`} className='btn btn-warning'>Edit</a>
                <form method='POST' action={`/adoption/${data.pets.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>Delete</button>
                </form>
                <h2>Comments</h2>
            </main>
        </Def>
    )

}


module.exports = showPet;