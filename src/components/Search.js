import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Card from './Card';
import { getPokemonAction } from '../actions/pokemonsActions';

const Search = () => {

    const dispatch = useDispatch();

    const pokemon = useSelector( state => state.pokemonsState.pokemon);
    const loading = useSelector( state => state.pokemonsState.loading);

    const [ poksArr, setPoksArr ] = useState(pokemon);
    const [ pokSearch, setPokSearch ] = useState('');

    const handleChange = e => {
        setPokSearch(e.target.value.trim().toLowerCase())
    }

    const onSearch = () => {
        dispatch( getPokemonAction(pokSearch) );
        setPokSearch('');
    }

    return ( 
        <div className="search__container">
            { loading ? <Loader /> : null}
            <div>
                <input 
                    type='text' 
                    name='pokSearch'
                    value={pokSearch}
                    onChange={handleChange}
                />
                <button 
                    onClick={onSearch}
                    disabled={!pokSearch}
                >search</button>
            </div>
            { pokemon ?
                <Card 
                    pokemon={pokemon}
                /> :
                <div>
                    <h3>Catch your pokemon!</h3>
                </div>   
            }
        </div>
    );
}
 
export default Search;