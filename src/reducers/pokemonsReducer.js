import {
    GET_POKEMON,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_ERROR,
    ADD_POKEMON,
    REMOVE_POKEMON
} from '../types';

const initialState = {
    pokemon: null,
    error: false,
    loading: false,
    favorites: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemon: null,
                error: false,
                loading: true
            }
        case GET_POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: action.payload,
                loading: false,
                error: false
            }
        case GET_POKEMON_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case ADD_POKEMON:
            return {
                ...state,
            }
        case REMOVE_POKEMON:
            return {
                ...state,
            }
        default:
            return state;
    }
}