const React = require('react')
const Def = require('../default')

function newPet () {
    return (
        <Def>
            <main>
                <h1>Unite a Pet with a Loving Owner</h1>
                <form method='POST' action='/adoption'>
                    <div className='form-group'>
                        <label htmlFor='name'>Pet Name</label>
                        <input className='form-control' required id='name' name='name'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='animal_type'>Type of Pet</label>
                        <select className='form-select' id='animal_type' name='animal_type'>
                            <option></option>
                            <option>Dog</option>
                            <option>Cat</option>
                            <option>Bird</option>
                            <option>Rodent</option>
                            <option>Reptiles</option>
                            <option>Fish</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>Pet Picture</label>
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

module.exports = newPet