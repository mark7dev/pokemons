import {
    GET_POKEMON,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_ERROR,
    ADD_POKEMON,
    REMOVE_POKEMON,
    REMOVE_POKEMON_SUCCESS,
    PERSIST_DATA,
    CHECK_FAVORITES
} from '../types';

import axios from 'axios';
import Swal from 'sweetalert2';

export const getPokemonAction = name => dispatch => {
    dispatch( getPokemon() )
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then( res => {
            dispatch (getPokemonSuccess(res.data))
            dispatch ( checkFavorites() )
        })
        .catch( error => {
            console.log(error.response);
            dispatch( getPokemonError() )

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data,
              })
        })
}

const getPokemon = () => ({
    type: GET_POKEMON
})

const getPokemonSuccess = data => ({
    type: GET_POKEMON_SUCCESS,
    payload: data
})

const getPokemonError = () => ({
    type: GET_POKEMON_ERROR
})

const checkFavorites = () => ({
    type: CHECK_FAVORITES
})


export const addPokemonAction = pokemon => dispatch => {
    dispatch( addPokemon(pokemon) )
    dispatch ( persistData() )
    Swal.fire({
        icon: 'success',
        title: 'Yeah!',
        text: `${pokemon.name} was added to your favorites!`,
      })
}

const addPokemon = pokemon => ({
    type: ADD_POKEMON,
    payload: pokemon
})

const persistData = () => ({
    type: PERSIST_DATA
})

export const removePokemonAction = id => dispatch => {
    dispatch( removePokemon(id) )
    dispatch( removePokemonSuccess() )
    dispatch ( persistData() )
    dispatch ( checkFavorites() )
    Swal.fire({
        icon: 'success',
        title: 'Yeah!',
        text: `Pokemon was removed from your favorites!`,
      })
}

const removePokemon = id => ({
    type: REMOVE_POKEMON,
    payload: id
})

const removePokemonSuccess = () => ({
    type: REMOVE_POKEMON_SUCCESS
})