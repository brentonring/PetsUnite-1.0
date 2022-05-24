const React = require('react')
const Def = require('../default')

function newEvent () {
    return (
        <Def>
            <main id='main-container'>
                <h1 style={{textAlign: 'center'}}>Unite Pet Lovers with Your Event</h1>
                <div>
                    <form method='POST' action="/events">
                        <div className='form-group col-sm-9'>
                            <label htmlFor='event_name'>Event Name</label>
                            <input className='form-control' id='event_name' name='event_name'/>
                        </div>
                        <div className='form-group col-sm-3'>
                            <label htmlFor='date'>Date</label>
                            <input className='form-control' id='date' name='date' placeholder='mm/dd/yyyy' />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='start_time'>Start Time</label>
                            <select className='form-select' id='start_time' name='start_time'>
                                <option>12:00am</option>
                                <option>1:00am</option>
                                <option>2:00am</option>
                                <option>3:00am</option> 
                                <option>4:00am</option> {/* ADD FUNCTIONALITY TO THESE */}
                                <option>5:00am</option>
                                <option>6:00am</option>
                                <option>7:00am</option>
                                <option>8:00am</option>
                                <option>9:00am</option>
                                <option>10:00am</option>
                                <option>11:00am</option>
                                <option>12:00pm</option>
                                <option>1:00pm</option>
                                <option>2:00pm</option>
                                <option>3:00pm</option> 
                                <option>4:00pm</option> {/* ADD FUNCTIONALITY TO THESE */}
                                <option>5:00pm</option>
                                <option>6:00pm</option>
                                <option>7:00pm</option>
                                <option>8:00pm</option>
                                <option>9:00pm</option>
                                <option>10:00pm</option>
                                <option>11:00pm</option>
                            </select>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='end_time'>End Time</label>
                            <select className='form-select' id='end_time' name='end_time'>
                                <option>12:00am</option>
                                <option>1:00am</option>
                                <option>2:00am</option>
                                <option>3:00am</option> 
                                <option>4:00am</option> {/* ADD FUNCTIONALITY TO THESE */}
                                <option>5:00am</option>
                                <option>6:00am</option>
                                <option>7:00am</option>
                                <option>8:00am</option>
                                <option>9:00am</option>
                                <option>10:00am</option>
                                <option>11:00am</option>
                                <option>12:00pm</option>
                                <option>1:00pm</option>
                                <option>2:00pm</option>
                                <option>3:00pm</option> 
                                <option>4:00pm</option> {/* ADD FUNCTIONALITY TO THESE */}
                                <option>5:00pm</option>
                                <option>6:00pm</option>
                                <option>7:00pm</option>
                                <option>8:00pm</option>
                                <option>9:00pm</option>
                                <option>10:00pm</option>
                                <option>11:00pm</option>
                            </select>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='location'>Location</label>
                            <input className='form-control' id='location' name='location'/>
                        </div>
                        <div className='form-group col-sm-3'>
                            <label htmlFor='city'>City</label>
                            <input className='form-control' id='city' name='city'/>
                        </div>
                        <div className='form-group col-sm-3'>
                            <label htmlFor='state'>State</label>
                            <select className='form-select' id='state' name='state'>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                        <div className='form-group col-sm-12'>
                            <label htmlFor='pic'>Picture (optional)</label>
                            <input className='form-control' id='pic' name='pic'/>
                        </div>
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = newEvent