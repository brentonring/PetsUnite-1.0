const React = require('react');
const Def = require('../default');

function indexServices (data) {
    let eventsFormatted = data.services.map((service) => {
        return(
            <div className='col-sm-6'>
                <h2 className="text-center">
                    <a className= "text-decoration-none" href={`/services/${service.id}`}> {service.service} </a>
                </h2>
                <img className="rounded mx-auto d-block" src={service.pic} alt={service.event_name}></img>
                <ul className='list-group'>
                        <li className='list-group-item text-center text-capitalize rounded'>
                            <img id="icons"src="/images/icons/icon_bread32.png"></img>{service.breed}
                        </li>
                        <li className='list-group-item text-center text-capitalize rounded'>
                            <img id="icons" src="/images/icons/icon_gender32.png"></img>{service.gender}
                        </li>
                        <li className='list-group-item text-center text-capitalize rounded'>
                            <img id="icons" src="/images/icons/icon_bday32.png"></img>{service.age} {service.age_unit}
                        </li>
                    </ul>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>Go to a Pet Event!</h1>
                <form method="GET" action="/services/new">
                    <input className='btn btn-primary' type="submit" value="Add a Service"></input>
                </form>
                <div className="row g-0">
                    {eventsFormatted}
                </div>
            </main>
        </Def>
    )
};

module.exports = indexServices;