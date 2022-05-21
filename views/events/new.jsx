const React = require('react')
const Def = require('../default')

function newEvent () {
    return (
        <Def>
            <main>
                <form method='POST' action="/events">
                    <div className='form-group'>
                        <label htmlFor='event_name'>Event Name</label>
                        <input className='form-control' id='event_name' name='event_name'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='date'>Date</label>
                        <input className='form-control' id='date' name='date' placeholder='__/__/____' />
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = newEvent