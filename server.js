require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

const pokemon = require('./models/pokemon.js')
const Pokemons = require('./models/pokemons.js')

// Setup Mongoose
const mongoose = require("mongoose");
//const Pokemon = require("./pokemon.js");

//Mongoose Connection
const mongoURI = process.env.MONGO_URI;
//const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI, { 
    //get rid of errors in the console
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

//error success messages about connection
// Define callback functions for various events
// db.on("error", (err) => console.log(err.message + " is mongo not running?"));
// db.on("open", () => console.log("mongo connected: ", mongoURI));
// db.on("close", () => console.log("mongo disconnected"));


// Setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Middleware
app.use((req, res, next) => {
    console.log('I run for all routes');  //New
    next();
});

//this allow the body of a post request
app.use(express.urlencoded({extended:false})); //New

//ROUTE
//homepage
app.get('/', (req, res) => {
    // res.send(pokemon)
    res.send('<h1>Welcome to Pokemon!<h1>')
})


// Pokemon Index
app.get('/pokemon', async function (req, res) {
    const foundPokemon = await Pokemons.find({});
    // res.send(pokemon)
    res.render('Index', {
        pokemon: foundPokemon,
    })
})

// app.get('/pokemon', (req, res) => {
//     // res.send(pokemon)
//     res.render('Index', {
//         pokemon: pokemon,
//     })
// })


//new
app.get('/pokemon/new', (req, res) => {//URL route    //New
    res.render('New'); //getting information from the view folder(fruitsfolder to get into the new file)
});


//create post route
//respond back when text is typed into the box
app.post('/pokemon', async (req, res)=>{  //New
    if(req.body.readyToFight === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToFight = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToFight = false; //do some data correction
    }                    
   // pokemon.push(req.body); //push adds new value to the end of an array
   // console.log(req.body);
  // pokemon.push(newPokemon)
  const newPokemon = await Pokemons.create({
    name: req.body.name,
    img: "http://img.pokemondb.net/artwork/" + req.body.name.toLowerCase(),
    readyToFight: req.body.readyToFight
})
    console.log(newPokemon)
    res.redirect('/pokemon');
});

//show Pokemon Middleman
app.get('/pokemon/:id', async (req, res) => {
    const onePokemon = await Pokemons.findById(req.params.id)
    res.render('Show', {
        pokemon: onePokemon
    })
})

// app.get('/pokemon/:id', (req, res) => {
//     res.render('Show', { 
//         pokemon: pokemon[req.params.id], 
//     })
// })

// Listener
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})
