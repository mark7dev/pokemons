import { combineReducers } from 'redux';
import pokemonsReducer from './pokemonsReducer';

export default combineReducers({
    pokemonsState: pokemonsReducer
})