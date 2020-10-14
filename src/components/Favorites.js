import React from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { removePokemonAction } from '../actions/pokemonsActions';

const Favorites = () => {

    const dispatch = useDispatch();

    const favorites = useSelector( state => state.pokemonsState.favorites);

    const onRemove = id => {
        dispatch( removePokemonAction(id) );
    }

    return ( 
        <div>
            {favorites.length === 0  ? <p>You don't have pokemons</p> :
            (favorites.map(item => (
                <div>
                    <Card 
                        key={item.id}
                        pokemon={item}
                    />
                    <button onClick={() => onRemove(item.id)}>Delete</button>
                </div>
            )))
            }
        </div>
    );
}
 
export default Favorites;