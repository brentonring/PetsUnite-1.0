const React = require('react');
const Def = require('../default');

function indexEvents (data) {
    let eventsFormatted = data.events.map((event) => {
        return(
            <div className='col-sm-6'>
                <h2 className="text-center">
                    <a className= "text-decoration-none" href={`/events/${event.id}`}> {event.event_name} </a>
                </h2>
                <img className="rounded mx-auto d-block" src={event.pic} alt={event.event_name}></img>
                <ul className= "list-group">
                    <li className='list-group-item text-center text-capitalize rounded'>
                        <img id="icons" src="/images/icons/icon_date32.png"></img>{event.date}, {event.start_time} - {event.end_time}
                    </li>
                    <li className='list-group-item text-center text-capitalize rounded'>
                        <img id="icons" src="/images/icons/icon_location32.png"></img>{event.location}
                    </li>
                </ul>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>Go to a Pet Event!</h1>
                <form method="GET" action="/events/new">
                    <input className='btn btn-primary' type="submit" value="Add an Event"></input>
                </form>
                <div className="row g-0">
                    {eventsFormatted}
                </div>
            </main>
        </Def>
    )
};

module.exports = indexEvents;