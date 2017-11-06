import React, { Component } from 'react';
import './styles/App.css';

import PokemonView from './PokemonView';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';

class App extends Component {
    constructor() {
        super();

        this.state = {
            pokemon: {}
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(id) {
        console.log(id);

        fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => res.json())
            .then(data => {
                const pokemon = new Pokemon(data);

                this.setState({ pokemon });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App">
                <PokemonView handleOnClick={this.handleOnClick} />
                <DetailView pokemon={this.state.pokemon} />
            </div>
        );
    }
}

export default App;
