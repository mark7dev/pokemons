import {
    GET_POKEMON,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_ERROR,
    ADD_POKEMON,
    REMOVE_POKEMON,
    REMOVE_POKEMON_SUCCESS,
    PERSIST_DATA
} from '../types';

const initialState = {
    pokemon: null,
    error: false,
    loading: false,
    favorites: JSON.parse(localStorage.getItem("favs")),
    toRemove: null
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
                favorites: [...state.favorites, action.payload],
                pokemon: null
            }
        case REMOVE_POKEMON:
            return {
                ...state,
                toRemove: action.payload
            }
        case REMOVE_POKEMON_SUCCESS:
            return {
                ...state,
                favorites: state.favorites.filter( pokemon => pokemon.id !== state.toRemove),
                toRemove: null
            }
        case PERSIST_DATA:
            localStorage.setItem("favs", JSON.stringify(state.favorites));
            return {
                ...state
            }
        default:
            return state;
    }
}