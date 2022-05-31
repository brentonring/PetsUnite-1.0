const React = require('react')
const Def = require('../default')

function newService () {
    return (
        <Def>
            <main>
                <h1>Unite Your Pet with People Who Want to Help</h1>
                <form method='POST' action='/services'>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label' htmlFor='service'>Service</label>
                        <div className='col-sm-10'>
                            <input className='form-control' required id='service' name='service'/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label' htmlFor='name'>Pet Name</label>
                        <div className='col-sm-10'>
                            <input className='form-control' required id='name' name='name'/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-form-label col-sm-2' htmlFor='animal_type'>Type of Pet</label>
                        <div className='col-sm-10'>
                            <select className='form-select' id='animal_type' name='animal_type'>
                                {/* <option></option> */}
                                <option>Dog</option>
                                <option>Cat</option>
                                <option>Bird</option> 
                                <option>Rodent</option>
                                <option>Reptile</option>
                                <option>Fish</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-form-label col-sm-2' htmlFor='breed'>Breed</label>
                        <div className='col-sm-10'>
                            <input className='form-control' id='breed' name='breed'/>
                        </div>
                    </div>
                    <fieldset className="form-group">
                        <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                        <div className="col-sm-10">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="gender" value="male" />
                                <label className="form-check-label" for="gender">
                                    Male
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="gender" value="female" />
                                <label className="form-check-label" for="gender">
                                    Female
                                </label>
                            </div>
                        </div>
                        </div>
                    </fieldset>
                    <div className='form-group row'>
                        <label className='col-form-label col-sm-2' htmlFor='age'>Age</label>
                        <div className='col-sm-5'>
                            <input className='form-control' type='number' id='age' name='age' min='1' />
                        </div>
                        <div className='col-sm-5'>
                            {/* <label className='col-form-label col-sm-2' htmlFor='age_unit'>Unit</label> */}
                            <select className='form-select' id='age_unit' name='age_unit'>
                                <option value='years'>Years</option>
                                <option value='months'>Months</option>
                                <option value='weeks'>Weeks</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-form-label col-sm-2' htmlFor='details'>Details</label>
                        <div className='col-sm-10'>
                            <textarea className='form-control' id='details' name='details'/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-form-label col-sm-2' htmlFor='health_history'>Health History</label>
                        <div className='col-sm-10'>
                            <textarea className='form-control' id='health_history' name='health_history'/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-form-label col-sm-2' htmlFor='pic'>Picture</label>
                        <div className='col-sm-10'>
                            <input className='form-control' id='pic' name='pic'/>
                        </div>
                    </div>
                    <div className='text-center'>
                        <input className='btn btn-primary' type='submit' value='Add Service' />
                    </div>       
                    {/* <div className='form-group col-sm-6'>
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
                    <div className='form-group col-sm-12'>
                        <label htmlFor='details'>Details</label>
                        <textarea className='form-control' id='details' name='details' rows='3' />
                    </div>
                    <div className='text-center'>
                        <input className='btn btn-primary' type='submit' value='Add Service' />
                    </div>        */}
                </form>
            </main>
        </Def>
    )
}

module.exports = newService