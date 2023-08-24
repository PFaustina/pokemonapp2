const mongoose = require('mongoose')

const pokemonsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: false
        },
        readyToFight: Boolean
    }
)

const Pokemons = mongoose.model('Pokemons', pokemonsSchema)

module.exports = Pokemons;