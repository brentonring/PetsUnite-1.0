const React = require('react')
const Def = require('../default')

function newService () {
    return (
        <Def>
            <main>
                <form method='POST' action='/services'>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='service'>Service</label>
                        <input className='form-control' required id='service' name='service'/>
                    </div>
                    <div className='form-group col-sm-3'>
                        <label htmlFor='animal_type'>Type of Pet</label>
                        <select className='form-select' id='animal_type' name='animal_type'>
                            <option>Dog</option>
                            <option>Cat</option>
                            <option>Bird</option> 
                            <option>Rodent</option>
                            <option>Reptiles</option>
                            <option>Fish</option>
                        </select>
                    </div>
                    <div className='form-group col-sm-3'>
                        <label htmlFor='breed'>Breed</label>
                        <input className='form-control' id='breed' name='breed'/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='name'>Pet Name</label>
                        <input className='form-control' required id='name' name='name'/>
                    </div>
                    <div className='form-group col-sm-3'>
                        <label htmlFor='age'>Age</label>
                        <input className='form-control' id='age' name='age'/>
                    </div>
                    <div className='form-group col-sm-3'>
                        <label htmlFor='age_unit'>Unit</label>
                        <select className='form-select' id='age_unit' name='age_unit'>
                            <option value='years'>Years</option>
                            <option value='months'>Months</option>
                            <option value='weeks'>Weeks</option>
                        </select>
                    </div>
                    <div className='form-group col-sm-4'>
                        <label htmlFor='gender'>Gender</label>
                        <select className='form-select' id='gender' name='gender'>
                            <option>Unknown</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className='form-group col-sm-4'>
                        <label htmlFor='health_history'>Health History</label>
                        <input className='form-control' id='health_history' name='health_history'/>
                    </div>
                    <div className='form-group col-sm-4'>
                        <label htmlFor='pic'>Picture</label>
                        <input className='form-control' id='pic' name='pic'/>
                    </div>
                    <div className='text-center'>
                        <input className='btn btn-primary' type='submit' value='Add Pet' />
                    </div>       
                </form>
            </main>
        </Def>
    )
}

module.exports = newService