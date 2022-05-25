const React = require('react')
const Def = require('../default')

function showEvents(data) {
    return (
        <Def>
            <main>
                <h1>Check out the event: {data.events.event_name}!</h1>                
                <img src={data.events.pic} />
                
            </main>
        </Def>
    )

}


module.exports = showEvents