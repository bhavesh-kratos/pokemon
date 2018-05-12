import { pokemonsJSON } from "../api/poke";

import React from 'react';

const PokemonCard = (props) => {
    const { pokemon } = props;
    const isSpecialPokemon = (pokeType) => (pokeType === 'MYTHIC' || pokeType === 'LEGENDARY')
    return (
        <div>
            <div className="ui card segment stacked tall" style={{
                margin: "auto auto",
            }}>
                <a className="image">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon['PkMn']}.png`} />
                </a>
                {isSpecialPokemon(pokemon['EvolutionPips']) && <a class="ui orange right ribbon label">{pokemon['EvolutionPips']}</a>}
                <div className="content">
                    <a className="header" >{pokemon['Identifier']}</a>
                    <div className="meta Test">
                        <a>pokemon details</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PokemonCard;
