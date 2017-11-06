import React, { Component } from 'react';
import PokeList from './PokeList';
import './styles/PokemonView.css';

const PokemonView = ({ handleOnClick }) => {

    return(
        <div className='pokemon-view'>
            <PokeList handleOnClick={handleOnClick} /> 
        </div>
    );
}

export default PokemonView;
