const React = require('react');
const Def = require('./default');

function Home (){
    return(
        <Def>
            <main>
                <h1>PetsUnite</h1>
                <div>
                    <img id="home-image" src="/images/krista-mangulsone-9gz3wfHr65U-unsplash.jpg" alt="Puppies and Kitties image"></img>
                    <div>
                        
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = Home;