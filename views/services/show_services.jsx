const React = require('react')
const Def = require('../default')

function showServices(data) {
    return (
        <Def>
            <main>
                <h1>Check out our service:</h1>
                 <h2>{data.services.service}!</h2>               
                <img src={data.services.pic} />
                
            </main>
        </Def>
    )

}


module.exports = showServices