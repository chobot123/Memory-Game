import { Pokedex } from "pokeapi-js-wrapper";

    const pokedex = new Pokedex();
    console.log(pokedex.getPokemon);

    /**
     * 1) List of Pokemon and respective Image
     * 2) Shuffle Function
     */

    //Min and Max of pokemon list [0, 500)
    const MAX = 500;

    //get random pokemon by id
    const randomPokemonId = () => {
        return Math.floor(Math.random() * MAX) + 1;
    }

    //get a list of these random pokemon
    const getRandomPokemons = async (quantity = 6) => {
        let list = [];
        let i = 0;
        while(i < quantity){
            const id = randomPokemonId();
            console.log(id);
            const card = await pokedex.getPokemonByName(id);
            // console.log(card);
            if(list.filter(item => item.name !== card.name).length === list.length){ //if the card does not yet exist in the list, push
                list.push(card);
                i++;
            }
        }
        // for(let i = 0; i < quantity; i++){
        //     const card = await pokedex.getPokemonByName(randomPokemonId());
        //     list.push(card);
        // }

        return list;
    }

    // const imgPreLoader = (cards) => {
    //     Promise.all(
    //         cards.map(
    //             ({img}) => 
    //             new Promise((resolve) => {
    //                 const tempImg = new Image();
    //                 tempImg.src = img;

    //                 tempImg.onload = () => resolve(img);
    //             })
    //         )
    //     )
    // }

    //create a new list with specific info we need (name, picture, id)
    const pokemonDeck = async (getRandomPokemons) => {
        const randomDeck = getRandomPokemons.map((card)=> ({
                    id : card.id,
                    name : card.name,
                    img : card.sprites.other["official-artwork"].front_default,
        }))

        // imgPreLoader(randomDeck);
        return randomDeck;
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