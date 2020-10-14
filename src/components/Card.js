import React from 'react';

const Card = ({pokemon}) => {

    const {id, name, sprites: {front_default} } = pokemon

    return ( 
        <div>
            <img src={front_default} alt=""/>
            <p>{id}</p>
            <p>{name}</p>
        </div>
    );
}
 
export default Card;