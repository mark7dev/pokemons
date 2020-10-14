import React, { useState } from 'react';
import './styles/Search.css';
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
            <div className="inputSearch__container">
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
                <div className="card__container">
                    <Card 
                        pokemon={pokemon}
                    />
                    {isFav ?
                        <div className="warning__container">
                            <i className="fa fa-check icon" aria-hidden="true"></i>
                            <h4 className="warning">Already in your favorites!</h4>
                        </div> 
                        :
                        <div className="add__container">
                            <button 
                            onClick={addToFavorites}
                            disabled={isFav}
                            ><i className="fa fa-plus-circle icon" aria-hidden="true"></i> Add to favorites</button>
                        </div>    
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