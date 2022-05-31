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
              <link rel="preconnect" href="https://fonts.googleapis.com"></link>
              <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
              <link href="https://fonts.googleapis.com/css2?family=Lobster+Two:ital@1&family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
        </head>
        <body>
          <header>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light p-3">
                <a className="nav-brand" href="/">
                  <img className="d-inline-block align-top" id="logo-img" src="/images/logo/logo50x50.png" width="50px" height="50px" alt="Green house cat and dog logo"></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                  <div className="navbar-collapse collapse" id="navbarCollapse" style={{flexGrow: '1'}}>
                      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                          <li className="nav-item active">
                              <a className="nav-link mx-3" href="/">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link mx-3" href="/adoption">Adoption</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link mx-3" href="/services">Services</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link mx-3" href="/events">Events</a>
                          </li>
                      </ul>
                      <div>
                      <form className="form-inline mt-2 mx-2 mt-md-0 nav-btn" method="GET" action={`/login`}>
                          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                      </form>
                      <form className="form-inline mt-2 mx-2 mt-md-0" method="GET" action={`/register`}>
                          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Register</button>
                      </form>
                      </div>
                  {/* <div className='login-container'>
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
                  </div> */}
                  </div>
            </nav>
          </header>
          <div className = "container">
              {html.children}
          </div>
          <footer className="text-center text-lg-start text-dark footer">
            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">About the Team</h6>
                      <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                        <p>
                          Alissa Makligh , Marisol Rodriguez, Brenton Ring, Eric Lowe and Katie Eells are cohorts in the Full Stack 
                          Software Development Certification Program at North Carolina State University. This is a Social Media 
                          project they worked on together.
                        </p>
                  </div>
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold">Team Profiles</h6>
                      <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                        <p>
                          <a href="https://github.com/alissamak">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-github" viewBox="0 0 16 16">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>    Alissa's GitHub</a>
                        </p>
                        <p>
                          <a href="https://github.com/brentonring">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-github" viewBox="0 0 16 16">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>    Brenton's GitHub</a>
                        </p>
                        <p>
                          <a href="https://github.com/marisoldrodriguez">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-github" viewBox="0 0 16 16">
                                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                      </svg>    Marisol's GitHub</a>
                        </p>
                        <p>
                          <a href="https://github.com/ericlowe25">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-github" viewBox="0 0 16 16">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>    Eric's GitHub</a>
                          </p>
                        <p>
                          <a href="https://github.com/kleells">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-github" viewBox="0 0 16 16">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>   Katie's GitHub</a>
                        </p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">Pages</h6>
                      <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                        <p>
                          <a href="#!" className="text-dark">Home</a>
                        </p>
                        <p>
                          <a href="#!" className="text-dark">Adoption</a>
                        </p>
                        <p>
                          <a href="#!" className="text-dark">Services</a>
                        </p>
                        <p>
                          <a href="#!" className="text-dark">Events</a>
                        </p>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                      <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                        <p>
                          <a href="#!" className="text-dark">Login</a>
                        </p>
                        <p>
                          <a href="#!" className="text-dark">Register</a>
                        </p>
                  </div>
                </div>
              </div>
            </section>
              <div
                  className="text-center p-3 copyright">
                © 2022 Copyright:
                <a className="text-dark" href="https://mdbootstrap.com/"
                  >MDBootstrap.com</a>
              </div>
          </footer>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"></script>
        </body>            
      </html>
  )
}

module.exports = Def;