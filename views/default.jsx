// Importing React to be consumed
const React = require ('react');

function Def (html) {
    return (
        <html>
            <head>
                {/* <title>PetsUnite</title> */}
                <title>{html.title || 'PetsUnite'}</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"></link>
                <link rel="stylesheet" href="/css/style.css"></link>
                <link rel="shortcut icon" type="image/jpg" href="/images/favicon/green_house_favicon.ico"></link>
            </head>
            <body>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                    {/* <a className="nav-brand" href="/">
                        <img className="d-inline-block align-top" id="logo-img" src="/images/logo/logo50x50.png" width="50px" height="50px" alt="Green house cat and dog logo"></img>
                    </a> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <a className="nav-brand" href="/">
                        <img className="d-inline-block align-top" id="logo-img" src="/images/logo/logo50x50.png" width="50px" height="50px" alt="Green house cat and dog logo"></img>
                    </a> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <a className="nav-brand" href="/">
                            <img className="d-inline-block align-top" id="logo-img" src="/images/logo/logo50x50.png" width="50px" height="50px" alt="Green house cat and dog logo"></img>
                        </a>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/adoption">Adoption</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/events">Events</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0"  id="nav-buttons">
                        <li className="nav-item" id="nav-button">
                            <form className="form-inline" method="GET" action={`/login`}>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                            </form>
                        </li>
                        <li className="nav-item" id="nav-button">
                            <form className="form-inline" method="GET" action={`/register`}>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Register</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
                <div className = "container">
                    {html.children}
                </div>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
            </body>            
        </html>
    )
}

module.exports = Def;