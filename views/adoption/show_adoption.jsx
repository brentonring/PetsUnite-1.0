const React = require('react')
const Def = require('../default')

function showPet(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.pets.comments.length) {
        comments = data.pets.comments.map(c => {
            return (
                <div className='form-group col-sm-6'>
                    <div className='border rounded'>
                        <h2 className='adopt'>{c.adopt ? `I'm interested in adopting! 🥰 `  : 'Admirer! ❤️ ' }</h2>
                        <h4>{c.content}</h4>
                        <h3><strong>- {c.author}</strong></h3>
                        <button type='submit' className='btn btn-success mx-2 my-1'>
                            <a href={`/adoption/${data.pets._id}/comment/${c.id}/edit`} className="text-decoration-none text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style={{ fill: 'white' }}  className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                        </svg></a></button>
                        <form method='POST' action={`/adoption/${data.pets._id}/comment/${c.id}?_method=DELETE`}>
                            <button type='submit' className='btn btn-danger mx-2 my-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style={{ fill: 'white' }} className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                </svg></button>
                        </form>
                    </div>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
<<<<<<< HEAD
                <h1>I'm ready for my new home!</h1>                
                    <img className='show-img' src={data.pets.pic} />
                <h2 className='show-intro'>Hi! My Name Is {data.pets.name}</h2>
                <h3>I'm Available</h3>                
                    <li className='list-group-item text-capitalize rounded'>
                        <img id="icons" src="/images/icons/icon_bread32.png"></img>{data.pets.breed}
                    </li>
                    <li className='list-group-item text-capitalize rounded'>
                        <img id="icons" src="/images/icons/icon_gender32.png"></img>{data.pets.gender}
                    </li>
                    <li className='list-group-item text-capitalize rounded'>
                        <img id="icons" src="/images/icons/icon_bday32.png"></img>{data.pets.age} {data.pets.age_unit}
                    </li>
                    <li className='list-group-item text-capitalize rounded'>
                        <img id="icons" src="/images/icons/icon_heartbeat32.png"></img><span>Health History: {data.pets.health_history}</span>
                    </li>
                <a href={`/adoption/${data.pets._id}/edit`} className='btn btn-warning'>Edit</a>
                <form method='POST' action={`/adoption/${data.pets._id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>Delete</button>
                </form>                
                <h2>Comments</h2>
                    <div className="row">               
                        {comments}               
                    </div>                
                    <hr />
                <h2>Please leave a comment!</h2>
                    <form action={`/adoption/${data.pets._id}/comment`} method="POST">
                        <div className="row">
                            <div className="form-group col-sm-12">
                            <label htmlFor="content">Content</label>
                            <textarea id="content" name="content" className="form-control"></textarea>
                            </div>
=======
                <h1>I'm Ready for My New Family!</h1>  
                <div className='container text-center'>
                    <img style={{marginTop: 10, marginBottom: 10, borderRadius: 10, width: "60%"}} src={data.pets.pic} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <li className='list-group-item text-capitalize rounded'>
                                <h2>Hi! My Name Is {data.pets.name}</h2>
                                <p style={{textTransform: 'none'}}>{data.pets.bio}</p>
                            </li>
                            <li className='list-group-item text-capitalize rounded'>
                                <img id="icons" src="/images/icons/icon_bread32.png"></img>{data.pets.breed}
                            </li>
                            <li className='list-group-item text-capitalize rounded'>
                                <img id="icons" src="/images/icons/icon_gender32.png"></img>{data.pets.gender}
                            </li>
                            <li className='list-group-item text-capitalize rounded'>
                                <img id="icons" src="/images/icons/icon_bday32.png"></img>{data.pets.age} {data.pets.age_unit}
                            </li>
                            <li className='list-group-item text-capitalize rounded'>
                                <img id="icons" src="/images/icons/icons8-stethoscope-32.png"></img><span>Health History: {data.pets.health_history}</span>
                            </li>
                            <li className='list-group-item text-capitalize rounded'>
                                <button type='submit' className='btn btn-success mx-2 my-1'>
                                    <a href={`/adoption/${data.pets._id}/edit`} className="text-decoration-none text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style={{ fill: 'white' }}  className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                            </svg> Edit</a>
                                </button>
                                <form method='POST' action={`/adoption/${data.pets._id}?_method=DELETE`}>
                                    <button type='submit' className='btn btn-danger mx-2 my-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style={{ fill: 'white' }} className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                            </svg> Delete</button>
                                </form>
                            </li>
>>>>>>> 8c20f6c701bd75c35a0e230f8b9bd3fbe71ecfa9
                        </div>
                        <div className="form-group col-sm-6">
                            <li className='list-group-item text-capitalize rounded'>
                                <h2>Please leave a comment!</h2>
                                <form action={`/adoption/${data.pets._id}/comment`} method="POST">
                                    <div className="mt-2">
                                        <label className="mt-2 mb-2" htmlFor="content">Content</label>
                                        <textarea id="content" name="content" className="form-control"></textarea>
                                        <label className="mt-3 mb-2" htmlFor="author">Author</label>
                                        <input id="author" name="author" className="form-control" />
                                        <label className="mt-3 mb-2" htmlFor="adopt">I'm interested in adopting {data.pets.name}!</label>
                                        <input type="checkbox" id="adopt" name="adopt" className="form-control form-check-input" />
                                    </div>
                                    <input className='text-center btn btn-primary mx-auto d-block' style={{marginTop: 48, marginBottom: 7}} type='submit' value='Add Comment' />
                                </form>
                            </li>
                        </div>
                        <div className="form-group col-sm-12">
                            <li className='list-group-item text-capitalize rounded'>
                                <h2>Comments</h2>
                                {comments}
                            </li>
                        </div>
                    </div>
                </div>
            </main>
        </Def>
    )

}

module.exports = showPet;
