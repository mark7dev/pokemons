import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Card from './Card';
import { getPokemonAction, addPokemonAction } from '../actions/pokemonsActions';

const Search = () => {

    const dispatch = useDispatch();

    const pokemon = useSelector( state => state.pokemonsState.pokemon);
    const loading = useSelector( state => state.pokemonsState.loading);
    const isFav = useSelector( state => state.pokemonsState.isFav);

    const [ pokSearch, setPokSearch ] = useState('');

    const handleChange = e => {
        setPokSearch(e.target.value.trim().toLowerCase())
    }

    const onSearch = () => {
        dispatch( getPokemonAction(pokSearch) );
        setPokSearch('');
    }

    const addToFavorites = () => {
        dispatch( addPokemonAction(pokemon) )
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
                <div>
                    <Card 
                        pokemon={pokemon}
                    />
                    {isFav ? 
                        <h4>Already in your favorites</h4>
                        :
                        <button 
                            onClick={addToFavorites}
                            disabled={isFav}
                        >Add to favorites</button>
                    }
                </div>
                :
                <div>
                    <h3>Catch your pokemon!</h3>
                </div>   
            }
        </div>
    );
}
 
export default Search;