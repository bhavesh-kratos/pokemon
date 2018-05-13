import React, { Component } from 'react';
import { addPokeSkills, calcRating } from '../lib/helpers';
import { Rating } from 'semantic-ui-react';

const PokemonCard = (props) => {
    const { pokemon, handleDimmerOpen, totalRange } = props;
    const isSpecialPokemon = (pokeType) => (pokeType === 'MYTHIC' || pokeType === 'LEGENDARY');
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
                    <a className="header" style={{ fontFamily: "Pokemon" }}>{pokemon['Identifier']}</a>
                    <div className="meta Test">
                        <Rating maxRating={5} rating={calcRating(addPokeSkills(pokemon), totalRange.max, totalRange.min)} icon='star' size='huge' disabled /><br />
                        <button className="circular ui icon button">
                            <i className="icon thumbs down outline"></i>
                        </button>
                        <button className="circular ui icon button" onClick={() => handleDimmerOpen(pokemon['PkMn'])}>
                            <i className="icon calculator"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PokemonCard;
