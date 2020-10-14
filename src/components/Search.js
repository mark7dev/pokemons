import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from './Loader';
import Card from './Card';

const Search = () => {

    const pokemon = useSelector( state => state.pokemonsState.pokemon)

    const [ poksArr, setPoksArr ] = useState(pokemon);
    const [ pokSearch, setPokSearch ] = useState('');

    const handleChange = e => {
        setPokSearch(e.target.value.trim().toLowerCase())
    }

    return ( 
        <div className="search__container">
            <Loader />
            <div>
                <input 
                    type='text' 
                    name='pokSearch'
                    value={pokSearch}
                    onChange={handleChange}
                />
                <button>search</button>
            </div>
            { pokemon ?
            <Card /> :
            <div>
                <h3>Catch your pokemon!</h3>
            </div>   
            }
        </div>
    );
}
 
export default Search;