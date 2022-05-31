const React = require('react')
const Def = require('../default')

function editPet ({pet}) {
    return (
        <Def>
            <main id="main-container">
                <h1 style={{textAlign: 'center'}}>Edit this Pet for Adoption</h1>
                <div>
                    <form method='POST' action={`/adoption/${pet._id}?_method=PUT`}>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='name'>Pet Name</label>
                            <input className='form-control' required id='name' name='name' defaultValue={pet.name}/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='animal_type'>Type of Pet</label>
                            <select className='form-select' id='animal_type' name='animal_type' defaultValue={pet.animal_type}>
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
                        <div className='form-group col-sm-4'>
                            <label htmlFor='breed'>Breed</label>
                            <input className='form-control' id='breed' name='breed' defaultValue={pet.breed}/>
                        </div>
                        <div className='form-group col-sm-4'>
                            <label htmlFor='gender'>Gender</label>
                            <select className='form-select' id='gender' name='gender' defaultValue={pet.gender}>
                                <option>Unknown</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className='form-group col-sm-4'>
                            <label htmlFor='color'>Color</label>
                            <input className='form-control' id='color' name='color' defaultValue={pet.color}/>
                        </div>
                        <div className='form-group col-sm-3'>
                            <label htmlFor='age'>Age</label>
                            <input className='form-control' type='number' id='age' name='age' defaultValue={pet.age}/>
                        </div>
                        <div className='form-group col-sm-3'>
                            <label htmlFor='age_unit'>Unit</label>
                            <select className='form-select' id='age_unit' name='age_unit' defaultValue={pet.age_unit}>
                                <option value='years'>Years</option>
                                <option value='months'>Months</option>
                                <option value='weeks'>Weeks</option>
                            </select>
                        </div>
                        <div className='form-group col-sm-3'>
                            <label htmlFor='health_history'>Health History</label>
                            <input className='form-control' id='health_history' name='health_history' defaultValue={pet.health_history}/>
                        </div>
                        <div className='form-group col-sm-3'>
                            <label htmlFor='pic'>Picture</label>
                            <input className='form-control' id='pic' name='pic' defaultValue={pet.pic}/>
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

module.exports = editPet