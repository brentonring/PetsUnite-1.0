const React = require('react')
const Def = require('../default')

function newEvent () {
    return (
        <Def>
            <main id='main-container'>
                <h1 style={{textAlign: 'center'}}>Unite Pet Lovers with Your Event</h1>
                <div>
                    <form method='POST' action="/events">
                        <div className='row'>
                            <div className='form-group col-sm-6'>
                                <label className='col-form-label' htmlFor='event_name'>Event Name</label>
                                <input className='form-control' id='event_name' name='event_name'/>
                            </div>
                            <div className='form-group col-sm-6'>
                                <label className='col-form-label' htmlFor='date'>Date</label>
                                <input className='form-control' type='date' id='date' name='date' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-sm-6'>
                                <label className='col-form-label' htmlFor='start_time'>Start Time</label>
                                <input className='form-control' type='time' id='start_time' name='start_time'/>
                            </div>
                            <div className='form-group col-sm-6'>
                                <label className='col-form-label' htmlFor='end_time'>End Time</label>
                                <input className='form-control' type='time' id='end_time' name='end_time'/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-sm-6'>
                                <label className='col-form-label' htmlFor='location'>Location</label>
                                <input className='form-control' id='location' name='location' placeholder='e.g. PetSmart, Reedy Creek Dog Park, etc.'/>
                            </div>
                            <div className='form-group col-sm-6'>
                                <label className='col-form-label' htmlFor='address'>Address</label>
                                <input className='form-control' id='address' name='address'/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-sm-6'>
                                <label className='col-form-label' htmlFor='city'>City</label>
                                <input className='form-control' id='city' name='city'/>
                            </div>
                            <div className='form-group col-sm-6'>
                                <label className='col-form-label' htmlFor='state'>State</label>
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
                        </div>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='event_details'>Details</label>
                            <textarea className='form-control' id='event_details' name='event_details'/>
                        </div>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='pic'>Picture (optional)</label>
                            <input className='form-control' id='pic' name='pic'/>
                        </div>
                        <div className='text-center'>
                            <input className='btn btn-primary' type='submit' value='Add Event' />
                        </div>       
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = newEvent