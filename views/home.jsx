const React = require('react');
const Def = require('./default');

function Home (){
    return(
        <Def>
            <main id="home-main">
                <h1>PetsUnite</h1>
                <div>
                    {/* <img id="home-image" src="/images/krista-mangulsone-9gz3wfHr65U-unsplash.jpg" alt="Puppies and Kitties image"></img> */}
                    <div id="home-content">
                        <h2>Welcome to PetsUnite!</h2>
                        <p>A social media space to socialize and explore different pets to adopt, meet other pet anothers at events,
                            and connect to services for you precious pets. Add, edit and explore the differet options at PetsUnite!
                        </p>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = Home;