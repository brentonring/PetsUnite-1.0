const React = require('react');
const Def = require('./default');

function Home (){
    return(
        <Def>
            <main id="home-main">
                <h1>PetsUnite</h1>
                <div>
                    <div id="home-content">
                        <h2>Welcome to PetsUnite!</h2>
                            <p>A space to socialize and explore. Find animals looking for a new home. Discover different events, classes and 
                                meet-ups for you and your pet. Connect to a variety of services for our lovable companions. Contribute to this incredible community of 
                                PetsUnite by posting, commenting and sharing with other fellow pet lovers!
                            </p>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = Home;