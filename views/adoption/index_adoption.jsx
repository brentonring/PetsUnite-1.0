const React = require('react');
const Def = require('../default');

function indexAdoption (data) {
    let petsFormatted = data.pets.map((pet) => {
        return(
            <div className='col-sm-6'>
                <h2 className="text-center">
                    <a className= "text-decoration-none" href={`/adoption/${pet.id}`}> {pet.name} </a>
                </h2>
                <img className="rounded mx-auto d-block" src={pet.pic} alt={pet.name}></img>
                <ul className='list-group'>
                    <li className='list-group-item text-center text-capitalize rounded'>
                        <img id="icons"src="/images/icons/icon_bread32.png"></img>{pet.breed}
                    </li>
                    <li className='list-group-item text-center text-capitalize rounded'>
                        <img id="icons" src="/images/icons/icon_gender32.png"></img>{pet.gender}
                    </li>
                    <li className='list-group-item text-center text-capitalize rounded'>
                        <img id="icons" src="/images/icons/icon_bday32.png"></img>{pet.age} {pet.age_unit}
                    </li>
                </ul>
                <button type="submit" className="btn btn-danger text-center mx-auto d-block">Like</button>

            </div>
            
        )
    })
    return(
        <Def>
            <main>
                <h1>Adopt a Pet!</h1>
                <form method="GET" action="/adoption/new">
                    <input className='btn btn-primary' type="submit" value="Add a Pet"></input>
                </form>
                <div className="row g-0">
                    {petsFormatted}
                </div>
            </main>
        </Def>
    )
};

module.exports = indexAdoption;