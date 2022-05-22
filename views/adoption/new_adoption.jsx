const React = require('react')
const Def = require('../default')

function newAdoption () {
    return (
        <Def>
            <main id="main-container">
                <h1 style={{textAlign: 'center'}}>Unite a Pet with a Loving Owner</h1>
                <div>
                <form method='POST' action='/adoption'>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='name'>Pet Name</label>
                        <input className='form-control' required id='name' name='name'/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='animal_type'>Type of Pet</label>
                        <select className='form-select' id='animal_type' name='animal_type'>
                            <option></option>
                            <option>Dog</option>
                            <option>Cat</option>
                            <option>Bird</option> 
                            <option>Rodent</option> {/* ADD FUNCTIONALITY TO THESE */}
                            <option>Reptiles</option>
                            <option>Fish</option>
                        </select>
                    </div>
                    <div className='form-group col-sm-4'>
                        <label htmlFor='breed'>Breed</label>
                        <input className='form-control' id='breed' name='breed'/>
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
                        <label htmlFor='color'>Color</label>
                        <input className='form-control' id='color' name='color'/>
                    </div>
                    <div className='form-group col-sm-4'>
                        <label htmlFor='age'>Age</label>
                        <input className='form-control' id='age' name='age'/> {/* change to number for age then dropdown for months/years */}
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
                </div>
            </main>
        </Def>
    )
}

module.exports = newAdoption