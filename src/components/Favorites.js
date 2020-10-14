import React from 'react';
import Card from './Card';
import './styles/Favorites.css';
import { useDispatch, useSelector } from 'react-redux';
import { removePokemonAction } from '../actions/pokemonsActions';

const Favorites = () => {

    const dispatch = useDispatch();

    const favorites = useSelector( state => state.pokemonsState.favorites);

    const onRemove = id => {
        dispatch( removePokemonAction(id) );
    }

    return ( 
        <div className="favorites__container">
            {favorites.length === 0  ? <h3>You don't have pokemons yet!</h3> :
            (favorites.map(item => (
                <div className="card__container">
                    <Card 
                        key={item.id}
                        pokemon={item}
                    />
                    <div className="remove__container">
                        <button onClick={() => onRemove(item.id)}><i className="fa fa-trash-o icon" aria-hidden="true"></i>Remove</button>
                    </div>
                </div>
            )))
            }
        </div>
    );
}
 
export default Favorites;