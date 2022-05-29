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
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3><strong>- {c.author}</strong></h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <h1>I'm ready for my new home!</h1>                
                    <img src={data.pets.pic} />
                <h2>Hi! My Name Is {data.pets.name}</h2>
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
                <a href={`/adoption/${data.pets.id}/edit`} className='btn btn-warning'>Edit</a>
                <form method='POST' action={`/adoption/${data.pets.id}?_method=DELETE`}>
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
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-4">
                                <label htmlFor="author">Author</label>
                                <input id="author" name="author" className="form-control" />
                            </div>
                            <div className="form-group col-sm-4">
                                <label htmlFor="stars">Star Rating</label>
                                <input type="range" step="1.0" min="1" max="5" id="stars" name="stars" className="form-control" />
                            </div>
                            <div className="form-group col-sm-4">
                                <label htmlFor="rant">Rant?</label>
                                <input type="checkbox" id="rant" name="rant" className="form-control form-check-input" />
                            </div>
                        </div>
                        <div className='text-center'>
                        <input className='btn btn-primary' type='submit' value='Add Comment' />
                        </div>  
                    </form>
            </main>
        </Def>
    )

}


module.exports = showPet;