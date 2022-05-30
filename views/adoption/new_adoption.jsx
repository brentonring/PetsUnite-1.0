const React = require('react')
const Def = require('../default')

function newAdoption () {
    return (
        <Def>
            <main id="main-container">
                <h1 style={{textAlign: 'center'}}>Unite a Pet with a Loving Owner</h1>
                <div>
                    <form method='POST' action='/adoption'>
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
                            <label className='col-form-label col-sm-2' htmlFor='color'>Color</label>
                            <div className='col-sm-10'>
                                <input className='form-control' id='color' name='color'/>
                            </div>
                        </div>
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
                            <label className='col-form-label col-sm-2' htmlFor='bio'>Bio</label>
                            <div className='col-sm-10'>
                                <textarea className='form-control' id='bio' name='bio'/>
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
                            <input className='btn btn-primary' type='submit' value='Add Pet' />
                        </div>       
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = newAdoption