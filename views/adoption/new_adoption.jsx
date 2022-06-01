const React = require('react')
const Def = require('../default')

function newAdoption () {
    return (
        <Def>
            <main id="main-container">
                <h1 style={{textAlign: 'center'}}>Unite a Pet with a Loving Owner</h1>
                <div>
                    <form method='POST' action='/adoption'>
                        <div className='form-group'>
                            <label className= 'col-form-label' htmlFor='name'>Pet Name</label>
                            <input className='form-control' required id='name' name='name'/>
                        </div>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='animal_type'>Type of Pet</label>
                                <select className='form-select' id='animal_type' name='animal_type'>
                                    <option>Dog</option>
                                    <option>Cat</option>
                                    <option>Bird</option> 
                                    <option>Rodent</option>
                                    <option>Reptile</option>
                                    <option>Fish</option>
                                    <option>Other</option>
                                </select>
                        </div>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='breed'>Breed</label>
                            <input className='form-control' id='breed' name='breed'/>
                        </div>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='gender'>Gender</label>
                                <select className='form-select' id='gender' name='gender' >
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                        </div>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='color'>Color</label>
                            <input className='form-control' id='color' name='color'/>
                        </div>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='age'>Age</label>
                            <input className='form-control' type='number' id='age' name='age' min='1' />
                            <label className='col-form-label' htmlFor='age_unit'></label>
                            <select className='form-select' id='age_unit' name='age_unit'>
                                <option value='years'>Years</option>
                                <option value='months'>Months</option>
                                <option value='weeks'>Weeks</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='bio'>Bio</label>
                            <textarea className='form-control' id='bio' name='bio'/>
                        </div>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='health_history'>Health History</label>
                            <textarea className='form-control' id='health_history' name='health_history'/>
                        </div>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='pic'>Picture</label>
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