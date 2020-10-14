import React from 'react';
import './styles/Card.css';

const Card = ({pokemon}) => {

    const {id, name, sprites: {front_default} } = pokemon

    return ( 
        <div className="card">
            <img src={front_default} alt="" className="pokImg"/>
            <div className="info">
                <h4 className="number"># {id}</h4>
                <p className="name">{name}</p>
            </div>
        </div>
    );
}
 
export default Card;