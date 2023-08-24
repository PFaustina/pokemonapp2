import React from 'react'

const myStyle = {
    color: 'black',
    backgroundColor: 'lightyellow',    
    display: 'flex',          // Use Flexbox
    flexDirection: 'column',  // Stack items vertically
    alignItems: 'center',     // Center items horizontally

}
// Define a React functional component called Show that takes a prop called pokemon
function Show({ pokemon }) {

    // console.log(pokemon)

    return (
        <div style={myStyle}>
        <h1> Gotta Catch 'Em All! </h1>

        
            <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
            <br />
    
            
            <img src={ pokemon.img + '.jpg'} />
            <br />
            
            {/* to bring it back to previous page, assigned a back button link */}
            <a href='/pokemon'> Back </a>
        </div>
    )
}

module.exports = Show