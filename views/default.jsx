// Importing React to be consumed
const React = require ('react');

function Def (html) {
    return (
        <html>
            <head>
                <title>PetsUnite</title>
            </head>
            <body>
                {html.children}
            </body>            
        </html>
    )
}

module.exports = Def