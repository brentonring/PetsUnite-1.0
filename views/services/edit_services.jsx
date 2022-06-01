const React = require('react')
const Def = require('../default')

function editService({service}) {
    return (
        <Def>
            <main id="main-container">
                <h1 style={{textAlign: 'center'}}>Edit this Pet Service</h1>
                <div>
                    <form method='POST' action={`/services/${service._id}?_method=PUT`}>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='service'>Service</label>
                            <input className='form-control' id='service' name='service' required defaultValue={service.service}/>
                        </div>
                        <div className='form-group'>
                            <label className= 'col-form-label' htmlFor='name'>Pet Name</label>
                            <input className='form-control' required id='name' name='name' defaultValue={service.name}/>
                        </div>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='animal_type'>Type of Pet</label>
                                <select className='form-select' id='animal_type' name='animal_type' defaultValue={service.animal_type}>
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
                            <input className='form-control' id='breed' name='breed' defaultValue={service.breed}/>
                        </div>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='gender'>Gender</label>
                                <select className='form-select' id='gender' name='gender' defaultValue={service.gender}>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                        </div>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='age'>Age</label>
                            <input className='form-control' type='number' id='age' name='age' min='1' defaultValue={service.age} />
                            <label className='col-form-label' htmlFor='age_unit'></label>
                            <select className='form-select' id='age_unit' name='age_unit' defaultValue={service.age_unit}>
                                <option value='years'>Years</option>
                                <option value='months'>Months</option>
                                <option value='weeks'>Weeks</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='details'>Details</label>
                            <textarea className='form-control' id='details' name='details' defaultValue={service.details}/>
                        </div>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='health_history'>Health History</label>
                            <textarea className='form-control' id='health_history' name='health_history' defaultValue={service.health_history}/>
                        </div>
                        <div className='form-group'>
                            <label className='col-form-label' htmlFor='pic'>Picture</label>
                            <input className='form-control' id='pic' name='pic' defaultValue={service.pic}/>
                        </div>
                        <div className='text-center'>
                            <input className='btn btn-primary' type='submit' value='Submit Changes' />
                        </div>       
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = editService;