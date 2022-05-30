const React = require('react');
const Def = require('./default');

function Home (){
    return(
        <Def>
            <main id="home-main">
                <h1>PetsUnite</h1>
                {/* <div id="intro" className="bg-image shadow-2-strong">
                    <div class="mask">
                        <div class="container d-flex align-items-center justify-content-center text-center h-100">
                        <div class="text-white">
                            <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
                            <h5 className="mb-4">Best & free guide of responsive web design</h5>
                            <a className="btn btn-outline-light btn-lg m-2" href="https://www.youtube.com/watch?v=c9B4TPnak1A" role="button"
                            rel="nofollow" target="_blank">Start tutorial</a>
                            <a className="btn btn-outline-light btn-lg m-2" href="https://mdbootstrap.com/docs/standard/" target="_blank"
                            role="button">Download MDB UI KIT</a>
                        </div>
                        </div>
                    </div>
                    </div> */}
                <div>
                    <div id="home-content">
                        <h2>Welcome to PetsUnite!</h2>
                        <p>A social media space to socialize and explore different pets to adopt, meet other pet anothers at events,
                            and connect to services for you precious pets. Add, edit and explore the different options at PetsUnite!
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = Home;