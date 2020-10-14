import {
    GET_POKEMON,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_ERROR,
    ADD_POKEMON,
    REMOVE_POKEMON
} from '../types';

import axios from 'axios';
import Swal from 'sweetalert2';

export const getPokemonAction = name => dispatch => {
    dispatch( getPokemon() )
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then( res => {
            console.log(res.data);
            dispatch (getPokemonSuccess(res.data))
        })
        .catch( error => {
            console.log(error.response);
            dispatch( getPokemonError )

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