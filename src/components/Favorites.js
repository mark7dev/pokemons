import React from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import {  } from '../actions/pokemonsActions';

const Favorites = () => {

    const favorites = useSelector( state => state.pokemonsState.favorites);

    return ( 
        <div>
            {favorites.length === 0  ? <p>You don't have pokemons</p> :
            (favorites.map(item => (
                <div>
                    <Card 
                        key={item.id}
                        pokemon={item}
                    />
                    <button>Delete</button>
                </div>
            )))
            }
        </div>
    );
}
 
export default Favorites;