import { Pokedex } from "pokeapi-js-wrapper";

    const pokedex = new Pokedex();

    /**
     * 1) List of Pokemon and respective Image
     * 2) Shuffle Function
     */

    //Min and Max of pokemon list [0, 500)
    const MAX = 500;

    //get random pokemon by id
    const randomPokemonId = () => {
        return Math.floor(Math.random() * MAX);
    }

    //get a list of these random pokemon
    const getRandomPokemons = async (quantity = 6) => {
        let list = [];
        for(let i = 0; i < quantity; i++){
            const card = await pokedex.getPokemonByName(randomPokemonId());
            list.push(card);
        }
        return list;
    }

    //create a new list with specific info we need (name, picture, id)
    const pokemonDeck = (getRandomPokemons) => {
        return getRandomPokemons.map((card)=> ({
                    id : card.id,
                    name : card.name,
                    img : card.sprites.other["official-artwork"].front_default,
        }))
    }


    const shuffleDeck = async () => {
        try {
            const randomDeck = await getRandomPokemons();
            const setDeck = await pokemonDeck(randomDeck);
            return setDeck;
        } catch (error) {
            console.log(error);
        }
    }

export default shuffleDeck;