import React from 'react'

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',  
    justifyContent: 'center', 
    backgroundColor: 'lightpink'
}


function Index({ pokemon }) {


    return (

        <div style={containerStyle}>
            <h1 >See All The Pokemon!</h1>
            {
                pokemon.map((pokemon, i) => {
                    return (
                     <ul key={i}>

                     <li>
                    <a href={`/pokemon/${pokemon.id}`}> {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} </a> 
                     </li>
                        </ul>
                        
                    )})
            }

        </div>
    )
}

module.exports = Index