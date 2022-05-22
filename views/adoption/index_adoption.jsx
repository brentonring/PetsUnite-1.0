const React = require('react');
const Def = require('../default');

function indexAdoption (data) {
    let petsFormatted = data.pets.map((pet) => {
        return(
            <div className='col-sm-4 g-4'>
                <div id="card">
                    <div id="card-content" className='row align-items-center p-4 py-0'>
                        <h2 className="text-center">
                            <a className= "text-decoration-none" href={`/adoption/${pet.id}`}> {pet.name} </a>
                        </h2>
                        <img className="rounded mx-auto d-block" src={pet.pic} alt={pet.name}></img>
                            <ul className='row mx-auto d-block'>
                                <li className='list-group-item text-capitalize rounded '>
                                    <img id="icons" src="/images/icons/icon_bread32.png"></img>{pet.breed}
                                </li>
                                <li className='list-group-item text-capitalize rounded'>
                                    <img id="icons" src="/images/icons/icon_gender32.png"></img>{pet.gender}
                                </li>
                                <li className='list-group-item text-capitalize rounded'>
                                    <img id="icons" src="/images/icons/icon_bday32.png"></img>{pet.age} {pet.age_unit}
                                </li>
                            </ul>
                            {/* <button type="submit" className="col-sm-6 btn btn-danger "><img id="icons" className='text-center mx-auto d-block' src='/images/icons/icon_lightgreen_heart32.png'></img></button>
                            <button type="submit" className="col-sm-6 btn btn-success "><img id="icons" className='text-center mx-auto d-block' src='/images/icons/icon_lightgreen_comment32.png'></img></button> */}
                    </div>
                {/* <ul className='list-group'>
                    <li className='list-group-item text-center text-capitalize rounded'>
                        <img id="icons"src="/images/icons/icon_bread32.png"></img>{pet.breed}
                    </li>
                    <li className='list-group-item text-center text-capitalize rounded'>
                        <img id="icons" src="/images/icons/icon_gender32.png"></img>{pet.gender}
                    </li>
                    <li className='list-group-item text-center text-capitalize rounded'>
                        <img id="icons" src="/images/icons/icon_bday32.png"></img>{pet.age} {pet.age_unit}
                    </li>
                </ul> */}
                    <div id="card-content-buttons" className='text-center mx-auto d-block'>
                        <button type="submit" className="btn btn-danger mx-2 my-1"><img id="icons" className='text-center mx-auto d-block' src='/images/icons/icon_lightgreen_heart32.png'></img></button>
                        <button type="submit" className="btn btn-success mx-2 my-1"><img id="icons" className='text-center mx-auto d-block' src='/images/icons/icon_lightgreen_comment32.png'></img></button>
                    </div>
                </div>
            </div>
            
        )
    })
    return(
        <Def>
            <main>
                <h1>ADOPT A PET!</h1>
                <div id="main-container">
                    <div className='text-center'>
                        <form method="GET" action="/adoption/new">
                            <input className='btn btn-primary' type="submit" value="Add a Pet"></input>
                        </form> 
                    </div>
                    <div className='container px-5'>
                        <div className="row gx-5">
                            {petsFormatted}
                        </div>
                    </div>
                </div>
            </main>
        </Def>
    )
};

module.exports = indexAdoption;