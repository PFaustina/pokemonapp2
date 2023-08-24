import React from 'react';

// Define a functional component named "New"
function New() {

   // Define the base URL for fetching Pokemon images
  const IMG_URL = "http://img.pokemondb.net/artwork/";

  const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',  
    justifyContent: 'center', 
    backgroundColor: 'lightyellow'
  }

  const myInput = {
    margin: '10px',      // Increase the margin for better spacing
    padding: '5px',      // Add padding for a better look
    border: '1px solid lightgray', // Add a border for input fields
    borderRadius: '5px',
    
  };

  return (
    <div style={container}>
      {/* form */}
      <h1>New Pokemon Page</h1>

      <form action="/pokemon" method="POST">

        Name: <input type="text" name="name" /><br />
        Image: <input style={myInput} name="img" defaultValue={IMG_URL + 'default.jpg'} /><br />
        Ready to Fight: <input type="checkbox" name="readyToFight" /><br />
        <input type="submit" value="create pokemon" /> <br />

      </form>

    </div>
  );
  }

module.exports = New;